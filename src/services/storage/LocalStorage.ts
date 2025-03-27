import { Storage } from './types';
import { Member } from '../../features/members/models/Field';

export class LocalStorage implements Storage {
  private key: string;

  constructor(key: string = 'members') {
    this.key = key;
  }

  getValue(): Member[] {
    const raw = localStorage.getItem(this.key);
    try {
      if (!raw) return [];

      const parsed = JSON.parse(raw);
      return parsed.map((member: Member) => ({
        ...member,
        joinDate: member.joinDate ? new Date(member.joinDate) : undefined,
      }));
    } catch (error) {
      console.error('Parsing error:', error);
      return [];
    }
  }

  setValue(value: Member[]): void {
    try {
      const serializable = value.map((member) => ({
        ...member,
        joinDate: member.joinDate instanceof Date ? member.joinDate.toISOString() : member.joinDate,
      }));

      const stringified = JSON.stringify(serializable);

      localStorage.setItem(this.key, stringified);
    } catch (error) {
      console.error(error);
    }
  }

  deleteValue(): void {
    localStorage.removeItem(this.key);
  }
}
