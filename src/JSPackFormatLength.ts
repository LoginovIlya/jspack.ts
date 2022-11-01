import JSPackFormat from './JSPackFormat';

const JSPackFormatLength = {
  [JSPackFormat.A]: 1,
  [JSPackFormat.x]: 1,
  [JSPackFormat.c]: 1,
  [JSPackFormat.b]: 1,
  [JSPackFormat.B]: 1,
  [JSPackFormat.h]: 2,
  [JSPackFormat.H]: 2,
  [JSPackFormat.s]: 1,
  [JSPackFormat.f]: 4,
  [JSPackFormat.d]: 8,
  [JSPackFormat.i]: 4,
  [JSPackFormat.I]: 4,
  [JSPackFormat.l]: 4,
  [JSPackFormat.L]: 4,
  [JSPackFormat.q]: 8,
  [JSPackFormat.Q]: 8,
};

export default JSPackFormatLength;
