import { Storage } from './types';

// 로컬 스토리지는 키,값 쌍으로 이루어진다.
export class LocalStorage implements Storage {
  private key: string;

  constructor(key: string = 'default-key') {
    this.key = key;
  }

  getValue(): string {
    return localStorage.getItem(this.key) || '';
  }

  setValue(value: string): void {
    localStorage.setItem(this.key, value);
  }

  deleteValue(): void {
    localStorage.removeItem(this.key);
  }
}
