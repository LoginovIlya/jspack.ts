import JSPackFormat from '@jspackTs/JSPackFormat';
import JSPackLong from '@jspackTs/JSPackLong';

type JSPackFormatTypes = {
  [JSPackFormat.A]: number[];
  [JSPackFormat.s]: string;
  [JSPackFormat.c]: string;
  [JSPackFormat.b]: number;
  [JSPackFormat.B]: number;
  [JSPackFormat.h]: number;
  [JSPackFormat.H]: number;
  [JSPackFormat.i]: number;
  [JSPackFormat.I]: number;
  [JSPackFormat.l]: number;
  [JSPackFormat.L]: number;
  [JSPackFormat.f]: number;
  [JSPackFormat.d]: number;
  [JSPackFormat.x]: number;
  [JSPackFormat.q]: JSPackLong;
  [JSPackFormat.Q]: JSPackLong;
};

export default JSPackFormatTypes;
