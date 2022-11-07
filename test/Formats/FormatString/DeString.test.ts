import DeString from '@jspackTs/Formats/FormatString/DeString';

describe('DeString', () => {
  test('Test decode string', () => {
    const deString = new DeString();

    const decodeData = deString.decode(new Uint8Array([97, 98, 99]));

    expect(decodeData).toBe('abc');
  });
});
