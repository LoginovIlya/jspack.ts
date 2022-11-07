import JSPackFormat from '@jspackTs/JSPackFormat';
import EnInt from '@jspackTs/Formats/FormatInt/EnInt';
import EnIntValidator from '@jspackTs/Formats/FormatInt/EnIntValidator';

// Test signed char number: -123
// BE: 0x85
// LE: 0x85
//
// Test unsigned char number: 123
// BE: 0x7B
// LE: 0x7B
//
// Test signed short number: -12345
// BE: 0xCF 0xC7
// LE: 0xC7 0xCF
//
// Test unsigned short number: 12345
// BE: 0x30 0x39
// LE: 0x39 0x30
//
// Test signed int or long number: -1234512345
// BE: 0xB6 0x6A 0xD6 0x27
// LE: 0x27 0xD6 0x6A 0xB6
//
// Test unsigned int or long number: 1234512345
// BE: 0x49 0x95 0x29 0xD9
// LE: 0xD9 0x29 0x95 0x49
jest.mock('@jspackTs/Formats/FormatInt/EnIntValidator');

describe('EnInt', () => {
  test('Test encode signed char. BE.', () => {
    const enInt = new EnInt(JSPackFormat.b, new EnIntValidator(JSPackFormat.b), true);

    const encodeData = enInt.encode(-123);

    expect(encodeData).toStrictEqual(new Uint8Array([0x85]));
  });

  test('Test encode signed char. LE.', () => {
    const enInt = new EnInt(JSPackFormat.b, new EnIntValidator(JSPackFormat.b), false);

    const encodeData = enInt.encode(-123);

    expect(encodeData).toStrictEqual(new Uint8Array([0x85]));
  });

  test('Test encode unsigned char. BE.', () => {
    const enInt = new EnInt(JSPackFormat.B, new EnIntValidator(JSPackFormat.B), true);

    const encodeData = enInt.encode(123);

    expect(encodeData).toStrictEqual(new Uint8Array([0x7B]));
  });

  test('Test encode unsigned char. LE.', () => {
    const enInt = new EnInt(JSPackFormat.B, new EnIntValidator(JSPackFormat.B), false);

    const encodeData = enInt.encode(123);

    expect(encodeData).toStrictEqual(new Uint8Array([0x7B]));
  });

  test('Test encode signed short. BE.', () => {
    const enInt = new EnInt(JSPackFormat.h, new EnIntValidator(JSPackFormat.h), true);

    const encodeData = enInt.encode(-12345);

    expect(encodeData).toStrictEqual(new Uint8Array([0xCF, 0xC7]));
  });

  test('Test encode signed short. LE.', () => {
    const enInt = new EnInt(JSPackFormat.h, new EnIntValidator(JSPackFormat.h), false);

    const encodeData = enInt.encode(-12345);

    expect(encodeData).toStrictEqual(new Uint8Array([0xC7, 0xCF]));
  });

  test('Test encode unsigned short. BE.', () => {
    const enInt = new EnInt(JSPackFormat.H, new EnIntValidator(JSPackFormat.H), true);

    const encodeData = enInt.encode(12345);

    expect(encodeData).toStrictEqual(new Uint8Array([0x30, 0x39]));
  });

  test('Test encode unsigned short. LE.', () => {
    const enInt = new EnInt(JSPackFormat.H, new EnIntValidator(JSPackFormat.H), false);

    const encodeData = enInt.encode(12345);

    expect(encodeData).toStrictEqual(new Uint8Array([0x39, 0x30]));
  });

  test('Test encode signed int. BE.', () => {
    const enInt = new EnInt(JSPackFormat.i, new EnIntValidator(JSPackFormat.i), true);

    const encodeData = enInt.encode(-1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0xB6, 0x6A, 0xD6, 0x27]));
  });

  test('Test encode signed int. LE.', () => {
    const enInt = new EnInt(JSPackFormat.i, new EnIntValidator(JSPackFormat.i), false);

    const encodeData = enInt.encode(-1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0x27, 0xD6, 0x6A, 0xB6]));
  });

  test('Test encode unsigned int. BE.', () => {
    const enInt = new EnInt(JSPackFormat.I, new EnIntValidator(JSPackFormat.I), true);

    const encodeData = enInt.encode(1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0x49, 0x95, 0x29, 0xD9]));
  });

  test('Test encode unsigned int. LE.', () => {
    const enInt = new EnInt(JSPackFormat.I, new EnIntValidator(JSPackFormat.I), false);

    const encodeData = enInt.encode(1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0xD9, 0x29, 0x95, 0x49]));
  });

  test('Test encode signed long. BE.', () => {
    const enInt = new EnInt(JSPackFormat.l, new EnIntValidator(JSPackFormat.l), true);

    const encodeData = enInt.encode(-1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0xB6, 0x6A, 0xD6, 0x27]));
  });

  test('Test encode signed long. LE.', () => {
    const enInt = new EnInt(JSPackFormat.l, new EnIntValidator(JSPackFormat.l), false);

    const encodeData = enInt.encode(-1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0x27, 0xD6, 0x6A, 0xB6]));
  });

  test('Test encode unsigned long. BE.', () => {
    const enInt = new EnInt(JSPackFormat.L, new EnIntValidator(JSPackFormat.L), true);

    const encodeData = enInt.encode(1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0x49, 0x95, 0x29, 0xD9]));
  });

  test('Test encode unsigned long. LE.', () => {
    const enInt = new EnInt(JSPackFormat.L, new EnIntValidator(JSPackFormat.L), false);

    const encodeData = enInt.encode(1234512345);

    expect(encodeData).toStrictEqual(new Uint8Array([0xD9, 0x29, 0x95, 0x49]));
  });
});
