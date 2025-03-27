import type { Member } from '../models/Field';
import type { FieldKey } from '../../shared/constants/fields';

// 필터링을 위한 목록 만들어주는 함수
export function getFilters(data: Member[], key: FieldKey) {
  const unique = Array.from(new Set(data.map((d) => String(d[key]))));
  return unique.map((val) => ({ text: val, value: val }));
}
