import { Storage } from './types';
import { SerializedMember } from '../../features/members/utils/transform';

export class InMemoryStorage implements Storage {
  private value: SerializedMember[] = [];

  getValue(): SerializedMember[] {
    return this.value;
  }

  setValue(value: SerializedMember[]): void {
    this.value = value;
  }

  deleteValue(): void {
    this.value = [];
  }
}
