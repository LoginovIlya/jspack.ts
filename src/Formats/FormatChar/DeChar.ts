import DecodeInterface from '../DecodeInterface';

export default class DeChar implements DecodeInterface<string> {
  decode(data: Uint8Array): string {
    return String.fromCharCode(data[0]);
  }
}
