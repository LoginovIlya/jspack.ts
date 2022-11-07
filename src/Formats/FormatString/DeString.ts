import DecodeInterface from '../DecodeInterface';

export default class DeString implements DecodeInterface<string> {
  decode(data: Uint8Array): string {
    return []
      .slice
      .call(data)
      .reduce(
        (accumulator: string, currentValue: number): string => accumulator + String.fromCharCode(currentValue),
        '',
      );
  }
}
