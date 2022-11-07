import DeInt64 from '@jspackTs/Formats/FormatInt64/DeInt64';
import JSPackFormat from '@jspackTs/JSPackFormat';

// Test number: 543215432154321
// BE: 0x00 0x01 0xEE 0x0D 0x32 0xDE 0xBC 0xD1 (high: 0x0001EE0D, low: 0x32DEBCD1)
// LE: 0xD1 0xBC 0xDE 0x32 0x0D 0xEE 0x01 0x00 (high: 0xD1BCDE32, low: 0x0DEE0100)

// Test number: -543215432154321
// BE: 0xFF 0xFE 0x11 0xF2 0xCD 0x21 0x43 0x2F (high: 0xFFFE11F2, low: 0xCD21432F)
// LE: 0x2F 0x43 0x21 0xCD 0xF2 0x11 0xFE 0xFF (high: 0x2F4321CD, low: 0xF211FEFF)

describe('DeInt64', () => {
  test('Test decode long int (BE, unsigned). Number: 543215432154321', () => {
    const deInt64 = new DeInt64(JSPackFormat.q, true);

    const decodeData = deInt64.decode(new Uint8Array([0x00, 0x01, 0xEE, 0x0D, 0x32, 0xDE, 0xBC, 0xD1]));

    expect(decodeData).toStrictEqual({
      low: 0x32DEBCD1,
      high: 0x0001EE0D,
      unsigned: true,
    });
  });

  test('Test decode long int (LE, unsigned). Number: 543215432154321', () => {
    const deInt64 = new DeInt64(JSPackFormat.q, false);

    const decodeData = deInt64.decode(new Uint8Array([0x00, 0x01, 0xEE, 0x0D, 0x32, 0xDE, 0xBC, 0xD1]));

    expect(decodeData).toStrictEqual({
      low: 0x0DEE0100,
      high: 0xD1BCDE32,
      unsigned: true,
    });
  });

  test('Test decode long int (BE, signed). Number: 543215432154321', () => {
    const deInt64 = new DeInt64(JSPackFormat.Q, true);

    const decodeData = deInt64.decode(new Uint8Array([0x00, 0x01, 0xEE, 0x0D, 0x32, 0xDE, 0xBC, 0xD1]));

    expect(decodeData).toStrictEqual({
      low: 0x32DEBCD1,
      high: 0x0001EE0D,
      unsigned: false,
    });
  });

  test('Test decode long int (LE, signed). Number: 543215432154321', () => {
    const deInt64 = new DeInt64(JSPackFormat.Q, false);

    const decodeData = deInt64.decode(new Uint8Array([0x00, 0x01, 0xEE, 0x0D, 0x32, 0xDE, 0xBC, 0xD1]));

    expect(decodeData).toStrictEqual({
      low: 0x0DEE0100,
      high: 0xD1BCDE32,
      unsigned: false,
    });
  });

  test('Test decode long int (BE, signed). Number: -543215432154321', () => {
    const deInt64 = new DeInt64(JSPackFormat.Q, true);

    const decodeData = deInt64.decode(new Uint8Array([0xFF, 0xFE, 0x11, 0xF2, 0xCD, 0x21, 0x43, 0x2F]));

    expect(decodeData).toStrictEqual({
      low: 0xCD21432F,
      high: 0xFFFE11F2,
      unsigned: false,
    });
  });

  test('Test decode long int (LE, signed). Number: -543215432154321', () => {
    const deInt64 = new DeInt64(JSPackFormat.Q, false);

    const decodeData = deInt64.decode(new Uint8Array([0xFF, 0xFE, 0x11, 0xF2, 0xCD, 0x21, 0x43, 0x2F]));

    expect(decodeData).toStrictEqual({
      low: 0xF211FEFF,
      high: 0x2F4321CD,
      unsigned: false,
    });
  });
});
