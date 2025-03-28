import type { Member } from '../models/Field';
import type { FieldKey } from '../../../shared/constants/fields';

// 필터링을 위한 목록 만들어주는 함수
export function getFilters(data: Member[], key: FieldKey) {
  const unique = Array.from(new Set(data.map((d) => d[key]).filter(Boolean)));

  return unique.map((val) => {
    const isDate = val instanceof Date || (typeof val === 'object' && 'getFullYear' in val);
    const text = isDate ? new Date(val).toISOString().slice(0, 10) : String(val);

    return { text, value: val };
  });
}
