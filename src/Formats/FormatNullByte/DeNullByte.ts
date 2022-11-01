import DecodeInterface from '@jspackTs/Formats/DecodeInterface';

export default class DeNullByte implements DecodeInterface<number> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decode(data: Uint8Array): number {
    return 0;
  }
}
