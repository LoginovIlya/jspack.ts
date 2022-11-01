import ValidatorInterface from '@jspackTs/Formats/ValidatorInterface';

export default class En754Validator implements ValidatorInterface<number> {
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
  }

  protected error(message: string): void {
    throw new Error(`Validation 754 error. ${message}`);
  }
}
