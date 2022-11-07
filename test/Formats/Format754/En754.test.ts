import JSPackFormat from '@jspackTs/JSPackFormat';
import En754 from '@jspackTs/Formats/Format754/En754';
import En754Validator from '@jspackTs/Formats/Format754/En754Validator';

// Test number: 55555.333
// Float BE: 0x47 0x59 0x3 0x55
// Float LE: 0x55 0x3 0x59 0x47
// Double BE: 0x40 0xEB 0x20 0x6A 0xA7 0xEF 0x9D 0xB2
// Double LE: 0xB2 0x9D 0xEF 0xA7 0x6A 0x20 0xEB 0x40
//
// Test number: -55555.333
// BE: 0xC7 0x59 0x3 0x55
// LE: 0x55 0x3 0x59 0xC7
// BE: 0xC0 0xEB 0x20 0x6A 0xA7 0xEF 0x9D 0xB2
// LE: 0xB2 0x9D 0xEF 0xA7 0x6A 0x20 0xEB 0xC0
jest.mock('@jspackTs/Formats/Format754/En754Validator');

describe('En754 (float or double)', () => {
  test('Test encode float. BE.', () => {
    const en754 = new En754(JSPackFormat.f, new En754Validator(), true);

    const encodeData = en754.encode(55555.333);

    expect(encodeData).toStrictEqual(new Uint8Array([0x47, 0x59, 0x3, 0x55]));
  });

  test('Test encode float. LE.', () => {
    const en754 = new En754(JSPackFormat.f, new En754Validator(), false);

    const encodeData = en754.encode(55555.333);

    expect(encodeData).toStrictEqual(new Uint8Array([0x55, 0x3, 0x59, 0x47]));
  });

  test('Test encode double. BE.', () => {
    const en754 = new En754(JSPackFormat.d, new En754Validator(), true);

    const encodeData = en754.encode(55555.333);

    expect(encodeData).toStrictEqual(new Uint8Array([0x40, 0xEB, 0x20, 0x6A, 0xA7, 0xEF, 0x9D, 0xB2]));
  });

  test('Test encode double. LE.', () => {
    const en754 = new En754(JSPackFormat.d, new En754Validator(), false);

    const encodeData = en754.encode(55555.333);

    expect(encodeData).toStrictEqual(new Uint8Array([0xB2, 0x9D, 0xEF, 0xA7, 0x6A, 0x20, 0xEB, 0x40]));
  });

  test('Test encode float. BE. Overflow big number.', () => {
    const en754 = new En754(JSPackFormat.f, new En754Validator(), true);

    const encodeData = en754.encode(9e40);

    expect(encodeData).toStrictEqual(new Uint8Array([0x7F, 0x80, 0x0, 0x0]));
  });

  test('Test encode float. BE. Overflow small number.', () => {
    const en754 = new En754(JSPackFormat.f, new En754Validator(), true);

    const encodeData = en754.encode(9e-40);

    expect(encodeData).toStrictEqual(new Uint8Array([0x0, 0x9, 0xCC, 0xD5]));
  });

  test('Test encode float. BE. Increment the exponent.', () => {
    const en754 = new En754(JSPackFormat.f, new En754Validator(), true);

    const encodeData = en754.encode(1023.999999);

    expect(encodeData).toStrictEqual(new Uint8Array([0x44, 0x80, 0x0, 0x0]));
  });

  test('Test encode negative float. BE.', () => {
    const en754 = new En754(JSPackFormat.f, new En754Validator(), true);

    const encodeData = en754.encode(-55555.333);

    expect(encodeData).toStrictEqual(new Uint8Array([0xC7, 0x59, 0x3, 0x55]));
  });
});
