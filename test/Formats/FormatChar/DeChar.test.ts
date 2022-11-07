import DeChar from '@jspackTs/Formats/FormatChar/DeChar';

describe('DeChar', () => {
  test('Test decode char', () => {
    const deChar = new DeChar();

    const decodeData = deChar.decode(new Uint8Array([97, 98, 99]));

    expect(decodeData).toBe('a');
  });
});
