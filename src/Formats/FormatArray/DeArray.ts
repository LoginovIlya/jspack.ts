import DecodeInterface from '@jspackTs/Formats/DecodeInterface';

export default class DeArray implements DecodeInterface<number[]> {
  decode(data: Uint8Array): number[] {
    return [].slice.call(data);
  }
}
