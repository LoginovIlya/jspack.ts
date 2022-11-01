import ValidatorInterface from '@jspackTs/Formats/ValidatorInterface';
import JSPackLong from '@jspackTs/JSPackLong';
import FormatInt64Data from '@jspackTs/Formats/FormatInt64/FormatInt64Data';

type EnIntFormatInt64 = keyof typeof FormatInt64Data;

export default class EnInt64Validator implements ValidatorInterface<JSPackLong> {
  protected format: EnIntFormatInt64;

  constructor(format: EnIntFormatInt64) {
    this.format = format;
  }

  validate(data: JSPackLong): void {
    if (typeof data.low !== 'number' || typeof data.high !== 'number') {
      this.error('Data not a number.');
    }

    if (Number.isNaN(data.low) || Number.isNaN(data.high)) {
      this.error('Data is NaN.');
    }

    if (!Number.isFinite(data.low) || !Number.isFinite(data.high)) {
      this.error('Data not a finite number.');
    }

    if (!(this.format in FormatInt64Data)) {
      this.error('Wrong format.');
    }

    if (FormatInt64Data[this.format].isSigned === false) {
      if (data.low < 0 || data.high < 0) {
        this.error('Unsigned int format error: Unsigned data < 0.');
      }
    }
  }

  protected error(message: string): void {
    throw new Error(`Validation Int64 error. ${message}`);
  }
}
