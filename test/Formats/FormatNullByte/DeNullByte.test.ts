import DeNullByte from '@jspackTs/Formats/FormatNullByte/DeNullByte';

describe('DeNullByte', () => {
  test('Test decode null byte', () => {
    const deNullByte = new DeNullByte();

    const decodeData = deNullByte.decode(new Uint8Array([1, 2, 3]));

    expect(decodeData).toBe(0);
  });
});
