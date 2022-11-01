import EncodeInterface from '@jspackTs/Formats/EncodeInterface';

export default class EnChar implements EncodeInterface<string> {
  encode(data: string): Uint8Array {
    return new Uint8Array([data[0].charCodeAt(0)]);
  }
}
