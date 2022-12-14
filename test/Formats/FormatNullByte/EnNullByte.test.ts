import EnNullByte from '@jspackTs/Formats/FormatNullByte/EnNullByte';

describe('EnNullByte', () => {
  test('Test encode null byte', () => {
    const enNullByte = new EnNullByte();

    const encodeData = enNullByte.encode(null);

    expect(encodeData).toStrictEqual(new Uint8Array([0]));
  });
});
