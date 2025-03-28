import type { SerializedMember } from '../../features/members/utils/transform';

export interface Storage {
  getValue(): SerializedMember[];
  setValue(value: SerializedMember[]): void;
  deleteValue(): void;
}
