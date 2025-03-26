import { Storage } from './types';

export class InMemoryStorage implements Storage {
  private value = '';

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }

  deleteValue(): void {
    this.value = '';
  }
}
