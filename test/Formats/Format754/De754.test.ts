import De754 from '@jspackTs/Formats/Format754/De754';
import JSPackFormat from '@jspackTs/JSPackFormat';

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
//
// Wrong precision decoding
// float number returns 55555.33203125

describe('De754 (float or double)', () => {
  test('Test decode float. BE.', () => {
    const de754 = new De754(JSPackFormat.f, true);

    const decodeData = de754.decode(new Uint8Array([0x47, 0x59, 0x3, 0x55]));

    expect(decodeData).toBe(55555.33203125);
  });

  test('Test decode float. LE.', () => {
    const de754 = new De754(JSPackFormat.f, false);

    const decodeData = de754.decode(new Uint8Array([0x55, 0x3, 0x59, 0x47]));

    expect(decodeData).toBe(55555.33203125);
  });

  test('Test decode double. BE.', () => {
    const de754 = new De754(JSPackFormat.d, true);

    const decodeData = de754.decode(new Uint8Array([0x40, 0xEB, 0x20, 0x6A, 0xA7, 0xEF, 0x9D, 0xB2]));

    expect(decodeData).toBe(55555.333);
  });

  test('Test decode double. LE.', () => {
    const de754 = new De754(JSPackFormat.d, false);

    const decodeData = de754.decode(new Uint8Array([0xB2, 0x9D, 0xEF, 0xA7, 0x6A, 0x20, 0xEB, 0x40]));

    expect(decodeData).toBe(55555.333);
  });

  test('Test decode negative float. BE.', () => {
    const de754 = new De754(JSPackFormat.f, true);

    const decodeData = de754.decode(new Uint8Array([0xC7, 0x59, 0x3, 0x55]));

    expect(decodeData).toBe(-55555.33203125);
  });

  test('Test decode negative float. LE.', () => {
    const de754 = new De754(JSPackFormat.f, false);

    const decodeData = de754.decode(new Uint8Array([0x55, 0x3, 0x59, 0xC7]));

    expect(decodeData).toBe(-55555.33203125);
  });

  test('Test decode negative double. BE.', () => {
    const de754 = new De754(JSPackFormat.d, true);

    const decodeData = de754.decode(new Uint8Array([0xC0, 0xEB, 0x20, 0x6A, 0xA7, 0xEF, 0x9D, 0xB2]));

    expect(decodeData).toBe(-55555.333);
  });

  test('Test decode negative double. LE.', () => {
    const de754 = new De754(JSPackFormat.d, false);

    const decodeData = de754.decode(new Uint8Array([0xB2, 0x9D, 0xEF, 0xA7, 0x6A, 0x20, 0xEB, 0xC0]));

    expect(decodeData).toBe(-55555.333);
  });

  test('Test decode float. BE. Zero bytes.', () => {
    const de754 = new De754(JSPackFormat.f, true);

    const decodeData = de754.decode(new Uint8Array([0x0, 0x3C, 0x7E, 0x9D]));

    expect(decodeData).toBe(0.000000000000000000000000000000000000005555550056603633);
  });

  test('Test decode float. BE. Max value.', () => {
    const de754 = new De754(JSPackFormat.f, true);

    const decodeData = de754.decode(new Uint8Array([0xFF, 0xFF, 0x00, 0x00]));

    expect(decodeData).toBe(NaN);
  });

  test('Test decode float. BE. Empty value.', () => {
    const de754 = new De754(JSPackFormat.f, true);

    const decodeData = de754.decode(new Uint8Array([]));

    expect(decodeData).toBe(NaN);
  });
});
