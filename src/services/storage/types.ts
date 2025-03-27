import type { Member } from '../../features/members/models/Field';

export interface Storage {
  getValue(): Member[];
  setValue(value: Member[]): void;
  deleteValue(): void;
}
