export default interface ValidatorInterface<T> {
  validate(data: T): void;
}
