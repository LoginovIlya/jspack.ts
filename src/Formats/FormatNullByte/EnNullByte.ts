import EncodeInterface from '@jspackTs/Formats/EncodeInterface';

export default class EnNullByte implements EncodeInterface<null> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  encode(data: null): Uint8Array {
    return new Uint8Array([0]);
  }
}
