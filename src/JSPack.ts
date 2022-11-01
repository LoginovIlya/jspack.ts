import DeArray from '@formatArray/DeArray';
import DeString from '@formatString/DeString';
import DeChar from '@formatChar/DeChar';
import DeInt from '@formatInt/DeInt';
import De754 from '@format754/De754';
import DeInt64 from '@jspackTs/Formats/FormatInt64/DeInt64';
import JSPackFormat from '@jspackTs/JSPackFormat';
import JSPackEndianness from '@jspackTs/JSPackEndianness';
import JSPackFormatLength from '@jspackTs/JSPackFormatLength';
import EnArray from '@formatArray/EnArray';
import EnString from '@formatString/EnString';
import EnChar from '@formatChar/EnChar';
import EnInt from '@formatInt/EnInt';
import En754 from '@format754/En754';
import EnInt64 from '@jspackTs/Formats/FormatInt64/EnInt64';
import JSPackFormatTypes from '@jspackTs/JSPackFormatTypes';
import DecodeInterface from '@jspackTs/Formats/DecodeInterface';
import EncodeInterface from '@jspackTs/Formats/EncodeInterface';
import EnIntValidator from '@formatInt/EnIntValidator';
import En754Validator from '@format754/En754Validator';
import EnInt64Validator from '@jspackTs/Formats/FormatInt64/EnInt64Validator';
import DeNullByte from '@formatNullByte/DeNullByte';
import EnNullByte from '@formatNullByte/EnNullByte';

export default class JSPack {
  public static Unpack<T extends keyof JSPackFormatTypes>(
    format: T,
    data: Uint8Array,
    endianness: JSPackEndianness,
  ): JSPackFormatTypes[T] {
    const formatLength = JSPackFormatLength[format];
    const endiannessSettings: boolean = (endianness !== JSPackEndianness.littleEndian);

    if (formatLength > data.length) {
      throw new Error('Data is too short.');
    }

    let unpack: DecodeInterface<JSPackFormatTypes[T]>;

    if (format === JSPackFormat.A) {
      unpack = new DeArray() as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.s) {
      unpack = new DeString() as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.c) {
      unpack = new DeChar() as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.b) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.B) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.h) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.H) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.i) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.I) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.l) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.L) {
      unpack = new DeInt(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.f) {
      unpack = new De754(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.d) {
      unpack = new De754(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.x) {
      unpack = new DeNullByte() as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.q) {
      unpack = new DeInt64(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.Q) {
      unpack = new DeInt64(format, endiannessSettings) as unknown as DecodeInterface<JSPackFormatTypes[T]>;
    } else {
      throw new Error(`Decode format '${format}' not found.`);
    }

    return unpack.decode(data);
  }

  public static Pack<T extends keyof JSPackFormatTypes>(
    format: T,
    data: JSPackFormatTypes[T],
    endianness: JSPackEndianness,
  ): Uint8Array {
    const endiannessSettings: boolean = (endianness !== JSPackEndianness.littleEndian);

    let encode: EncodeInterface<JSPackFormatTypes[T]>;

    if (format === JSPackFormat.A) {
      encode = new EnArray() as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.s) {
      encode = new EnString() as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.c) {
      encode = new EnChar() as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.b) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.B) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.h) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.H) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.i) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.I) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.l) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.L) {
      const validator = new EnIntValidator(format);
      encode = new EnInt(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.f) {
      const validator = new En754Validator();
      encode = new En754(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.d) {
      const validator = new En754Validator();
      encode = new En754(format, validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.q) {
      const validator = new EnInt64Validator(format);
      encode = new EnInt64(validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.Q) {
      const validator = new EnInt64Validator(format);
      encode = new EnInt64(validator, endiannessSettings) as EncodeInterface<JSPackFormatTypes[T]>;
    } else if (format === JSPackFormat.x) {
      encode = new EnNullByte() as unknown as EncodeInterface<JSPackFormatTypes[T]>;
    } else {
      throw new Error(`Encode format '${format}' not found.`);
    }

    return encode.encode(data);
  }

  public static CalcLength(format: JSPackFormat): number {
    return JSPackFormatLength[format];
  }
}
