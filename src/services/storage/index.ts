import { Storage } from './types';
import { InMemoryStorage } from './InMemoryStorage';
import { LocalStorage } from './LocalStorage';

/**
 * 스토리지 타입에 따라 적절한 스토리지 구현체를 생성합니다.
 *
 * @param storageType - 사용할 스토리지 타입 => local-storage | 'in-memory
 * @returns Storage - 생성된 스토리지 인스턴스
 */
export function createStorage(storage_type: string): Storage {
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
