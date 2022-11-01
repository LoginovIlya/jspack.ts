import JSPackFormat from '@jspackTs/JSPackFormat';

const FormatIntData = {
  [JSPackFormat.b]: { isSigned: true, min: -(2 ** 7), max: (2 ** 7) - 1 },
  [JSPackFormat.B]: { isSigned: false, min: 0, max: (2 ** 8) - 1 },
  [JSPackFormat.h]: { isSigned: true, min: -(2 ** 15), max: (2 ** 15) - 1 },
  [JSPackFormat.H]: { isSigned: false, min: 0, max: (2 ** 16) - 1 },
  [JSPackFormat.i]: { isSigned: true, min: -(2 ** 31), max: (2 ** 31) - 1 },
  [JSPackFormat.I]: { isSigned: false, min: 0, max: (2 ** 32) - 1 },
  [JSPackFormat.l]: { isSigned: true, min: -(2 ** 31), max: (2 ** 31) - 1 },
  [JSPackFormat.L]: { isSigned: false, min: 0, max: (2 ** 32) - 1 },
};

export default FormatIntData;
