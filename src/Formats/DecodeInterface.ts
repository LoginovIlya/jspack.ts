export default interface DecodeInterface<T> {
  decode(data: Uint8Array): T;
}
