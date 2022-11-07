import EncodeInterface from '../EncodeInterface';
import JSPackLong from '../../JSPackLong';
import ValidatorInterface from '../ValidatorInterface';

export default class EnInt64 implements EncodeInterface<JSPackLong> {
  private readonly validator;

  private readonly endianness;

  constructor(validator: ValidatorInterface<JSPackLong>, endianness: boolean) {
    this.validator = validator;
    this.endianness = endianness;
  }

  encode(data: JSPackLong): Uint8Array {
    this.validator.validate(data);

    const arrNumber = [data.low, data.high];
    const arrData: number[] = [];

    const start = this.endianness ? 0 : 7;
    const nsb = this.endianness ? 1 : -1;
    const stop = start + nsb * 8;

    let i = start;
    let rvi = 1;
    let f = 0;
    let s = 24;

    while (i !== stop) {
      // eslint-disable-next-line no-mixed-operators,no-bitwise
      arrData[i] = arrNumber[rvi] >> s & 0xff;
      i += nsb;
      f += 1;
      rvi = (f < 4 ? 1 : 0);
      s = 24 - (8 * (f % 4));
    }

    return new Uint8Array(arrData);
  }
}
