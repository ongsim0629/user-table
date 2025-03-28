import { Storage } from './types';
import { SerializedMember } from '../../features/members/utils/transform';

export class LocalStorage implements Storage {
  private key: string;

  constructor(key: string = 'members') {
    this.key = key;
  }

  getValue(): SerializedMember[] {
    const raw = localStorage.getItem(this.key);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as SerializedMember[];
    } catch (error) {
      console.error('Parsing error:', error);
      return [];
    }
  }

  setValue(value: SerializedMember[]): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  deleteValue(): void {
    localStorage.removeItem(this.key);
  }
}
