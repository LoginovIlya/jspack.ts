import DecodeInterface from '../DecodeInterface';

export default class DeArray implements DecodeInterface<number[]> {
  decode(data: Uint8Array): number[] {
    return [].slice.call(data);
  }
}
