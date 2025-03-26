export interface Storage {
  getValue(): string;
  setValue: (value: string) => void;
  deleteValue(): void;
}
