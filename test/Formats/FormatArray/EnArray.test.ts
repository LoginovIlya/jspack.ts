import EnArray from '@formatArray/EnArray';

describe('EnArray', () => {
  test('Test encode array', () => {
    const enArray = new EnArray();

    const encodeData = enArray.encode([10, 20, 30]);

    expect(encodeData).toStrictEqual(new Uint8Array([10, 20, 30]));
  });
});
