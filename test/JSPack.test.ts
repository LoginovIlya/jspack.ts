import JSPack from '@jspackTs/JSPack';
import JSPackFormat from '@jspackTs/JSPackFormat';
import JSPackEndianness from '@jspackTs/JSPackEndianness';

describe('JSPack', () => {
  test('Test pack array', () => {
    const data: number[] = [];

    const pack = JSPack.Pack(JSPackFormat.A, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([]));
  });

  test('Test pack NUL-padded byte', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.x, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0]));
  });

  test('Test pack single char (ascii)', () => {
    const data = '\u0000';

    const pack = JSPack.Pack(JSPackFormat.c, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0]));
  });

  test('Test pack string char (ascii)', () => {
    const data = '\u0000';

    const pack = JSPack.Pack(JSPackFormat.s, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0]));
  });

  test('Test pack char (signed)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.b, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0]));
  });

  test('Test pack char (unsigned)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.B, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0]));
  });

  test('Test pack short (signed)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.h, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0]));
  });

  test('Test pack short (unsigned)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.H, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0]));
  });

  test('Test pack int (signed)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.i, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0]));
  });

  test('Test pack int (unsigned)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.I, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0]));
  });

  test('Test pack long (signed)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.l, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0]));
  });

  test('Test pack long (unsigned)', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.L, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0]));
  });

  test('Test pack long long (signed)', () => {
    const data = { low: 0, high: 0, unsigned: false };

    const pack = JSPack.Pack(JSPackFormat.q, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  });

  test('Test pack long long (unsigned)', () => {
    const data = { low: 0, high: 0, unsigned: false };

    const pack = JSPack.Pack(JSPackFormat.Q, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  });

  test('Test pack float', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.f, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0]));
  });

  test('Test pack double', () => {
    const data = 0;

    const pack = JSPack.Pack(JSPackFormat.d, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]));
  });

  test('Test unpack array', () => {
    const data = new Uint8Array([0x0]);

    const pack = JSPack.Unpack(JSPackFormat.A, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual([0x0]);
  });

  test('Test unpack NUL-padded byte', () => {
    const data = new Uint8Array([0x0]);

    const pack = JSPack.Unpack(JSPackFormat.x, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack single char (ascii)', () => {
    const data = new Uint8Array([0x0]);

    const pack = JSPack.Unpack(JSPackFormat.c, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual('\u0000');
  });

  test('Test unpack string char (ascii)', () => {
    const data = new Uint8Array([0x0]);

    const pack = JSPack.Unpack(JSPackFormat.s, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual('\u0000');
  });

  test('Test unpack char (signed)', () => {
    const data = new Uint8Array([0x0]);

    const pack = JSPack.Unpack(JSPackFormat.b, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack char (unsigned)', () => {
    const data = new Uint8Array([0x0]);

    const pack = JSPack.Unpack(JSPackFormat.B, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack short (signed)', () => {
    const data = new Uint8Array([0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.h, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack short (unsigned)', () => {
    const data = new Uint8Array([0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.H, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack int (signed)', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.i, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack int (unsigned)', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.I, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack long (signed)', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.l, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack long (unsigned)', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.L, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack long long (signed)', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.q, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual({ low: 0, high: 0, unsigned: true });
  });

  test('Test unpack long long (unsigned)', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.Q, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual({ low: 0, high: 0, unsigned: false });
  });

  test('Test unpack float', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.f, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test unpack double', () => {
    const data = new Uint8Array([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]);

    const pack = JSPack.Unpack(JSPackFormat.d, data, JSPackEndianness.bigEndian);

    expect(pack).toStrictEqual(0);
  });

  test('Test CalcLength', () => {
    const format = JSPackFormat.d;

    const length = JSPack.CalcLength(format);

    expect(length).toBe(8);
  });

  test('Test pack wrong format', () => {
    const format = 20;

    const wrongFormat = (): Uint8Array => JSPack.Pack(format, 0, JSPackEndianness.bigEndian);

    expect(wrongFormat).toThrow(new Error(`Encode format '${format}' not found.`));
  });

  test('Test unpack wrong format', () => {
    const format = 20;

    const wrongFormat = (): unknown => JSPack.Unpack(format, new Uint8Array(), JSPackEndianness.bigEndian);

    expect(wrongFormat).toThrow(new Error(`Decode format '${format}' not found.`));
  });

  test('Test unpack data is too short', () => {
    const data = new Uint8Array();

    const wrongFormat = (): unknown => JSPack.Unpack(JSPackFormat.d, data, JSPackEndianness.bigEndian);

    expect(wrongFormat).toThrow(new Error('Data is too short.'));
  });
});
