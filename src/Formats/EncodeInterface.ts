export default interface EncodeInterface<T> {
  encode(data: T): Uint8Array;
}
