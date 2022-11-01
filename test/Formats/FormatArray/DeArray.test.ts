import DeArray from '@formatArray/DeArray';

describe('DeArray', () => {
  test('Test decode array', () => {
    const deArray = new DeArray();

    const decodeData = deArray.decode(new Uint8Array([10, 20, 30]));

    expect(decodeData).toStrictEqual([10, 20, 30]);
  });
});
