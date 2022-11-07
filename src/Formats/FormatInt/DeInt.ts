import DecodeInterface from '../DecodeInterface';
import JSPackFormatLength from '../../JSPackFormatLength';
import FormatIntData from './FormatIntData';

export default class DeInt implements DecodeInterface<number> {
  private readonly formatLength;

  private readonly formatIsSigned;

  private readonly endianness;

  constructor(format: keyof typeof FormatIntData, endianness: boolean) {
    this.formatLength = JSPackFormatLength[format];
    this.formatIsSigned = FormatIntData[format].isSigned;
    this.endianness = endianness;
  }

  decode(data: Uint8Array): number {
    const lsb = this.endianness ? (this.formatLength - 1) : 0;
    const nsb = this.endianness ? -1 : 1;
    const stop = lsb + nsb * this.formatLength;

    let decodeNumber = 0;
    let i = lsb;
    let f = 1;

    while (i !== stop) {
      decodeNumber += (data[i] * f);
      i += nsb;
      f *= 256;
    }

    // eslint-disable-next-line no-bitwise
    if (this.formatIsSigned && (decodeNumber & (2 ** (this.formatLength * 8 - 1)))) {
      decodeNumber -= 2 ** (this.formatLength * 8);
    }

    return decodeNumber;
  }
}
