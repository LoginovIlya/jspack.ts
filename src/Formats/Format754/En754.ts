import Format754Data from './Format754Data';
import JSPackFormatLength from '../../JSPackFormatLength';
import EncodeInterface from '../EncodeInterface';
import ValidatorInterface from '../ValidatorInterface';

export default class En754 implements EncodeInterface<number> {
  private readonly formatLength;

  private readonly formatMLen;

  private readonly formatRt;

  private readonly validator;

  private readonly endianness;

  constructor(format: keyof typeof Format754Data, validator: ValidatorInterface<number>, endianness: boolean) {
    this.formatLength = JSPackFormatLength[format];
    this.formatMLen = Format754Data[format].mLen;
    this.formatRt = Format754Data[format].rt;
    this.validator = validator;
    this.endianness = endianness;
  }

  encode(data: number): Uint8Array {
    this.validator.validate(data);

    let v = data;
    let e: number;
    let m: number;
    let c: number;
    let i = this.endianness ? (this.formatLength - 1) : 0;
    let mLen = this.formatMLen;
    let eLen = this.formatLength * 8 - this.formatMLen - 1;

    const arrData: number[] = [];
    const d = this.endianness ? -1 : 1;
    // eslint-disable-next-line no-bitwise
    const eMax = (1 << eLen) - 1;
    // eslint-disable-next-line no-bitwise
    const eBias = eMax >> 1;
    const s = v < 0 ? 1 : 0;
    v = Math.abs(v);

    // Calculate log2 of the value
    e = Math.floor(Math.log(v) / Math.LN2);
    c = 2 ** (-e);

    // It is not working:
    // if (v * c < 1) { e -= 1; c *= 2; } // Math.log() isn't 100% reliable
    // Because: v * (2 ** (-log2(v)) > 1.
    // If Math.log return non-exact value then division and Math.floor fix it.
    // You can get problem if a use Math.log(x) * Math.LOG2E algorithm.
    // Multiplication reduces the number: Math.log(2**28) * Math.LOG2E === 27.999999999999996
    // Division increases the number: Math.log(2**29) / Math.LN2 === 29.000000000000004

    // Round by adding 1 / 2 the significand's LSD
    if (e + eBias >= 1) {
      // Normalized:  mLen significand digits
      v += this.formatRt / c;
    } else {
      // Denormalized:  <= mLen significand digits
      v += this.formatRt * (2 ** (1 - eBias));
    }

    if (v * c >= 2) {
      // Rounding can increment the exponent
      e += 1;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      // Overflow
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      // Normalized - term order matters, as Math.pow(2, 52 - e) and v * Math.pow(2, 52) can overflow
      m = (v * c - 1) * (2 ** mLen);
      e += eBias;
    } else {
      // Denormalized - also catches the '0' case, somewhat by chance
      m = v * (2 ** (eBias - 1)) * (2 ** mLen);
      e = 0;
    }

    while (mLen >= 8) {
      // eslint-disable-next-line no-bitwise
      arrData[i] = m & 0xff;
      i += d;
      m /= 256;
      mLen -= 8;
    }

    // eslint-disable-next-line no-bitwise
    e = (e << mLen) | m;
    eLen += mLen;

    while (eLen > 0) {
      // eslint-disable-next-line no-bitwise
      arrData[i] = e & 0xff;
      i += d;
      e /= 256;
      eLen -= 8;
    }

    // eslint-disable-next-line no-bitwise
    arrData[i - d] |= s * 128;

    return new Uint8Array(arrData);
  }
}
