import EnIntValidator from '@jspackTs/Formats/FormatInt/EnIntValidator';
import JSPackFormat from '@jspackTs/JSPackFormat';

describe('EnIntValidator', () => {
  test('Success validate.', () => {
    const enIntValidator = new EnIntValidator(JSPackFormat.b);

    const validate = (): void => enIntValidator.validate(10);

    expect(validate()).toBe(undefined);
  });

  test('Not a number.', () => {
    const enIntValidator = new EnIntValidator(JSPackFormat.b);

    const validate = (): void => enIntValidator.validate('not a number' as unknown as number);

    expect(validate).toThrow(new Error('Validation Int error. Data not a number.'));
  });

  test('Is NaN.', () => {
    const enIntValidator = new EnIntValidator(JSPackFormat.b);

    const validate = (): void => enIntValidator.validate(NaN);

    expect(validate).toThrow(new Error('Validation Int error. Data is NaN.'));
  });

  test('Not a finite number.', () => {
    const enIntValidator = new EnIntValidator(JSPackFormat.b);

    const validate = (): void => enIntValidator.validate(Infinity);

    expect(validate).toThrow(new Error('Validation Int error. Data not a finite number.'));
  });

  test('Wrong format.', () => {
    const enIntValidator = new EnIntValidator(20);

    const validate = (): void => enIntValidator.validate(20);

    expect(validate).toThrow(new Error('Validation Int error. Wrong format.'));
  });

  test('Unsigned data < 0.', () => {
    const enIntValidator = new EnIntValidator(JSPackFormat.B);

    const validate = (): void => enIntValidator.validate(-20);

    expect(validate).toThrow(new Error('Validation Int error. Unsigned int format error: Unsigned data < 0.'));
  });

  test('data < min.', () => {
    const enIntValidator = new EnIntValidator(JSPackFormat.b);

    const validate = (): void => enIntValidator.validate(-129);

    expect(validate).toThrow(new Error('Validation Int error. Int format error: data < min.'));
  });
  test('data > min.', () => {
    const enIntValidator = new EnIntValidator(JSPackFormat.b);

    const validate = (): void => enIntValidator.validate(129);

    expect(validate).toThrow(new Error('Validation Int error. Int format error: data > max.'));
  });
});
