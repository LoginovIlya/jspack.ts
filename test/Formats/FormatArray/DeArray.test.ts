import DeArray from '@jspackTs/Formats/FormatArray/DeArray';

describe('DeArray', () => {
  test('Test decode array', () => {
    const deArray = new DeArray();

    const decodeData = deArray.decode(new Uint8Array([0xA, 0x14, 0x1E]));

    expect(decodeData).toStrictEqual([10, 20, 30]);
  });
});
