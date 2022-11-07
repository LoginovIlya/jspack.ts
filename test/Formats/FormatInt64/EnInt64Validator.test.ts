import EnInt64Validator from '@jspackTs/Formats/FormatInt64/EnInt64Validator';
import JSPackFormat from '@jspackTs/JSPackFormat';

describe('EnInt64Validator', () => {
  test('Success validate.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.q);

    const validate = (): void => enInt64Validator.validate({
      low: 0x32DEBCD1,
      high: 0x0001EE0D,
      unsigned: true,
    });

    expect(validate()).toBe(undefined);
  });

  test('Not a number low.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.q);

    const validate = (): void => enInt64Validator.validate({
      low: 'not a number' as unknown as number,
      high: 0x0001EE0D,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Data not a number.'));
  });

  test('Not a number high.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.q);

    const validate = (): void => enInt64Validator.validate({
      low: 0x32DEBCD1,
      high: 'not a number' as unknown as number,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Data not a number.'));
  });

  test('Data low is NaN.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.q);

    const validate = (): void => enInt64Validator.validate({
      low: NaN,
      high: 0x0001EE0D,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Data is NaN.'));
  });

  test('Data low is NaN.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.q);

    const validate = (): void => enInt64Validator.validate({
      low: 0x32DEBCD1,
      high: NaN,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Data is NaN.'));
  });

  test('Data low not a finite number.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.q);

    const validate = (): void => enInt64Validator.validate({
      low: Infinity,
      high: 0x0001EE0D,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Data not a finite number.'));
  });

  test('Data high not a finite number.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.q);

    const validate = (): void => enInt64Validator.validate({
      low: 0x32DEBCD1,
      high: Infinity,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Data not a finite number.'));
  });

  test('Wrong format.', () => {
    const enInt64Validator = new EnInt64Validator(20);

    const validate = (): void => enInt64Validator.validate({
      low: 0x32DEBCD1,
      high: 0x0001EE0D,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Wrong format.'));
  });

  test('Unsigned low int format error: Unsigned data < 0.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.Q);

    const validate = (): void => enInt64Validator.validate({
      low: -20,
      high: 0x0001EE0D,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Unsigned int format error: Unsigned data < 0.'));
  });

  test('Unsigned high int format error: Unsigned data < 0.', () => {
    const enInt64Validator = new EnInt64Validator(JSPackFormat.Q);

    const validate = (): void => enInt64Validator.validate({
      low: 0x32DEBCD1,
      high: -20,
      unsigned: true,
    });

    expect(validate).toThrow(new Error('Validation Int64 error. Unsigned int format error: Unsigned data < 0.'));
  });
});
