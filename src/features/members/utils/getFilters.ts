import type { Member } from '../models/Field';
import type { FieldKey } from '../../../shared/constants/fields';

// 필터링을 위한 목록 만들어주는 함수
export function getFilters(data: Member[], key: FieldKey) {
  const unique = Array.from(new Set(data.map((d) => d[key]).filter((val) => val != null)));

  return unique.map((val) => {

    const isDate = val instanceof Date || (typeof val === 'object' && 'getFullYear' in val);

    if (key === 'email') {
      return {
        text: val ? '선택됨' : '선택 안함',
        value: val,
      };
    }

    if (isDate) {
      return {
        text: new Date(val).toISOString().slice(0, 10),
        value: val,
      };
    }

    return { text: String(val), value: val };
  });
}
