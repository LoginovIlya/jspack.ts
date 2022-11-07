import ValidatorInterface from '../ValidatorInterface';
import FormatIntData from './FormatIntData';

type EnIntFormat = keyof typeof FormatIntData;

export default class EnIntValidator implements ValidatorInterface<number> {
  protected format: EnIntFormat;

  constructor(format: EnIntFormat) {
    this.format = format;
  }

  validate(data: number): void {
    if (typeof data !== 'number') {
      this.error('Data not a number.');
    }

    if (Number.isNaN(data)) {
      this.error('Data is NaN.');
    }

    if (!Number.isFinite(data)) {
      this.error('Data not a finite number.');
    }

    if (!(this.format in FormatIntData)) {
      this.error('Wrong format.');
    }

    if (FormatIntData[this.format].isSigned === false && data < 0) {
      this.error('Unsigned int format error: Unsigned data < 0.');
    }

    if (data < FormatIntData[this.format].min) {
      this.error('Int format error: data < min.');
    }

    if (data > FormatIntData[this.format].max) {
      this.error('Int format error: data > max.');
    }
  }

  protected error(message: string): void {
    throw new Error(`Validation Int error. ${message}`);
  }
}
