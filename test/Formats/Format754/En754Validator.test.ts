import En754Validator from '@jspackTs/Formats/Format754/En754Validator';

describe('EnInt64Validator', () => {
  test('Success validate.', () => {
    const en754Validator = new En754Validator();

    const validate = (): void => en754Validator.validate(55555.333);

    expect(validate()).toBe(undefined);
  });

  test('Data not a number.', () => {
    const en754Validator = new En754Validator();

    const validate = (): void => en754Validator.validate('not a number' as unknown as number);

    expect(validate).toThrow(new Error('Validation 754 error. Data not a number.'));
  });

  test('Data not a number.', () => {
    const en754Validator = new En754Validator();

    const validate = (): void => en754Validator.validate(NaN);

    expect(validate).toThrow(new Error('Validation 754 error. Data is NaN.'));
  });

  test('Data not a finite number.', () => {
    const en754Validator = new En754Validator();

    const validate = (): void => en754Validator.validate(Infinity);

    expect(validate).toThrow(new Error('Validation 754 error. Data not a finite number.'));
  });
});
