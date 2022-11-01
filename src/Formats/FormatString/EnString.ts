import EncodeInterface from '@jspackTs/Formats/EncodeInterface';

export default class EnString implements EncodeInterface<string> {
  encode(data: string): Uint8Array {
    return new Uint8Array(data.split('').map((dataChar: string): number => dataChar.charCodeAt(0)));
  }
}
