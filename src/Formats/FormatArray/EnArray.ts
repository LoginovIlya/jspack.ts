import EncodeInterface from '../EncodeInterface';

export default class EnArray implements EncodeInterface<number[]> {
  encode(data: number[]): Uint8Array {
    return new Uint8Array(data);
  }
}
