import { Storage } from './types';
import { Member } from '../../features/members/models/Field';

export class InMemoryStorage implements Storage {
  private value: Member[] = [];

  getValue(): Member[] {
    return this.value;
  }

  setValue(value: Member[]): void {
    this.value = value;
  }

  deleteValue(): void {
    this.value = [];
  }
}
