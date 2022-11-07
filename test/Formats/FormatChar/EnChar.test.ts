import EnChar from '@jspackTs/Formats/FormatChar/EnChar';

describe('EnChar', () => {
  test('Test encode char', () => {
    const enChar = new EnChar();

    const encodeData = enChar.encode('abc');

    expect(encodeData).toStrictEqual(new Uint8Array([97]));
  });
});
