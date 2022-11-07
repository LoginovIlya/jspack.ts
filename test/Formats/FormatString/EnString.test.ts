import EnString from '@jspackTs/Formats/FormatString/EnString';

describe('DeString', () => {
  test('Test encode string', () => {
    const enString = new EnString();

    const encodeData = enString.encode('abc');

    expect(encodeData).toStrictEqual(new Uint8Array([97, 98, 99]));
  });
});
