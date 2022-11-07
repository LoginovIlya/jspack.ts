import DecodeInterface from '../DecodeInterface';
import JSPackFormatLength from '../../JSPackFormatLength';
import Format754Data from './Format754Data';

export default class De754 implements DecodeInterface<number> {
  private readonly formatLength;

  private readonly formatMLen;

  private readonly endianness;

  constructor(format: keyof typeof Format754Data, endianness: boolean) {
    this.formatLength = JSPackFormatLength[format];
    this.formatMLen = Format754Data[format].mLen;
    this.endianness = endianness;
  }

  decode(data: Uint8Array): number {
    const mLen = this.formatMLen;
    const eLen = this.formatLength * 8 - this.formatMLen - 1;
    // eslint-disable-next-line no-bitwise
    const eMax = (1 << eLen) - 1;
    // eslint-disable-next-line no-bitwise
    const eBias = eMax >> 1;
    const d = this.endianness ? 1 : -1;

    let i = this.endianness ? 0 : (this.formatLength - 1);
    let s = data[i];
    let nBits = -7;
    let m: number;
    i += d;

    // eslint-disable-next-line no-bitwise
    let e = s & ((1 << (-nBits)) - 1);
    // eslint-disable-next-line no-bitwise
    s >>= (-nBits);
    nBits += eLen;

    while (nBits > 0) {
      e = e * 256 + data[i];
      i += d;
      nBits -= 8;
    }

    // eslint-disable-next-line no-bitwise
    m = e & ((1 << (-nBits)) - 1);
    // eslint-disable-next-line no-bitwise
    e >>= (-nBits);
    nBits += mLen;

    while (nBits > 0) {
      m = m * 256 + data[i];
      i += d;
      nBits -= 8;
    }

    if (e === eMax) {
      return NaN;
    }

    if (e === 0) {
      // Zero, or denormalized number
      e = 1 - eBias;
    } else {
      // Normalized number
      m += (2 ** mLen);
      e -= eBias;
    }

    return (s ? -1 : 1) * m * (2 ** (e - mLen));
  }
}
