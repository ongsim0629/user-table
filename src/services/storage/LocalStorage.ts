import { Storage } from './types';
import { SerializedMember } from '../../features/members/utils/transform';

export class LocalStorage implements Storage {
  // local-storage는 키,값 쌍으로 데이터를 저장하기 때문에 키가 필요합니다.
  private key: string;
  // 키의 기본값으로 'members'를 사용합니다.
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
