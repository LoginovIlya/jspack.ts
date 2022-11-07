import EnArray from '@jspackTs/Formats/FormatArray/EnArray';

describe('EnArray', () => {
  test('Test encode array', () => {
    const enArray = new EnArray();

    const encodeData = enArray.encode([10, 20, 30]);

    expect(encodeData).toStrictEqual(new Uint8Array([0xA, 0x14, 0x1E]));
  });
});
