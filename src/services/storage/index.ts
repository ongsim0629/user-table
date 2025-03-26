import { Storage } from './types';
import { InMemoryStorage } from './InMemoryStorage';
import { LocalStorage } from './LocalStorage';

export function createStorage(storage_type: string): Storage {
  // 스토리지 타입에 따라서 분기 처리
  switch (storage_type) {
    case 'local-storage':
      return new LocalStorage();
    case 'in-memory':
    default:
      return new InMemoryStorage();
  }
}

const STORAGE_TYPE = import.meta.env.VITE_STORAGE;
export const storage: Storage = createStorage(STORAGE_TYPE);
