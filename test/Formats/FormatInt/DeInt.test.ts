import DeInt from '@jspackTs/Formats/FormatInt/DeInt';
import JSPackFormat from '@jspackTs/JSPackFormat';

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
describe('DeInt', () => {
  test('Test decode signed char. BE.', () => {
    const deInt = new DeInt(JSPackFormat.b, true);

    const decodeData = deInt.decode(new Uint8Array([0x85]));

    expect(decodeData).toBe(-123);
  });

  test('Test decode signed char. LE.', () => {
    const deInt = new DeInt(JSPackFormat.b, false);

    const decodeData = deInt.decode(new Uint8Array([0x85]));

    expect(decodeData).toBe(-123);
  });

  test('Test decode unsigned char. BE.', () => {
    const deInt = new DeInt(JSPackFormat.B, true);

    const decodeData = deInt.decode(new Uint8Array([0x7B]));

    expect(decodeData).toBe(123);
  });

  test('Test decode unsigned char. LE.', () => {
    const deInt = new DeInt(JSPackFormat.B, false);

    const decodeData = deInt.decode(new Uint8Array([0x7B]));

    expect(decodeData).toBe(123);
  });

  test('Test decode signed short. BE.', () => {
    const deInt = new DeInt(JSPackFormat.h, true);

    const decodeData = deInt.decode(new Uint8Array([0xCF, 0xC7]));

    expect(decodeData).toBe(-12345);
  });

  test('Test decode signed short. LE.', () => {
    const deInt = new DeInt(JSPackFormat.h, false);

    const decodeData = deInt.decode(new Uint8Array([0xC7, 0xCF]));

    expect(decodeData).toBe(-12345);
  });

  test('Test decode unsigned short. BE.', () => {
    const deInt = new DeInt(JSPackFormat.h, true);

    const decodeData = deInt.decode(new Uint8Array([0x30, 0x39]));

    expect(decodeData).toBe(12345);
  });

  test('Test decode unsigned short. LE.', () => {
    const deInt = new DeInt(JSPackFormat.h, false);

    const decodeData = deInt.decode(new Uint8Array([0x39, 0x30]));

    expect(decodeData).toBe(12345);
  });

  test('Test decode signed int. BE.', () => {
    const deInt = new DeInt(JSPackFormat.i, true);

    const decodeData = deInt.decode(new Uint8Array([0xB6, 0x6A, 0xD6, 0x27]));

    expect(decodeData).toBe(-1234512345);
  });

  test('Test decode signed int. LE.', () => {
    const deInt = new DeInt(JSPackFormat.i, false);

    const decodeData = deInt.decode(new Uint8Array([0x27, 0xD6, 0x6A, 0xB6]));

    expect(decodeData).toBe(-1234512345);
  });

  test('Test decode unsigned int. BE.', () => {
    const deInt = new DeInt(JSPackFormat.I, true);

    const decodeData = deInt.decode(new Uint8Array([0x49, 0x95, 0x29, 0xD9]));

    expect(decodeData).toBe(1234512345);
  });

  test('Test decode unsigned int. LE.', () => {
    const deInt = new DeInt(JSPackFormat.I, false);

    const decodeData = deInt.decode(new Uint8Array([0xD9, 0x29, 0x95, 0x49]));

    expect(decodeData).toBe(1234512345);
  });

  test('Test decode signed long. BE.', () => {
    const deInt = new DeInt(JSPackFormat.l, true);

    const decodeData = deInt.decode(new Uint8Array([0xB6, 0x6A, 0xD6, 0x27]));

    expect(decodeData).toBe(-1234512345);
  });

  test('Test decode signed long. LE.', () => {
    const deInt = new DeInt(JSPackFormat.l, false);

    const decodeData = deInt.decode(new Uint8Array([0x27, 0xD6, 0x6A, 0xB6]));

    expect(decodeData).toBe(-1234512345);
  });

  test('Test decode unsigned long. BE.', () => {
    const deInt = new DeInt(JSPackFormat.L, true);

    const decodeData = deInt.decode(new Uint8Array([0x49, 0x95, 0x29, 0xD9]));

    expect(decodeData).toBe(1234512345);
  });

  test('Test decode unsigned long. LE.', () => {
    const deInt = new DeInt(JSPackFormat.L, false);

    const decodeData = deInt.decode(new Uint8Array([0xD9, 0x29, 0x95, 0x49]));

    expect(decodeData).toBe(1234512345);
  });
});
