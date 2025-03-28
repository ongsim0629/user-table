import type { Member } from '../models/Field';
import type { FieldKey } from '../../../shared/constants/fields';
import dayjs from 'dayjs';

// 필터링을 위한 목록 만들어주는 함수
export function getFilters(data: Member[], key: FieldKey) {
  const unique = Array.from(new Set(data.map((d) => d[key]).filter((val) => val != null)));

  return unique.map((val) => {
    
    const isDate = dayjs.isDayjs(val);

    if (key === 'email') {
      return {
        text: val ? '선택됨' : '선택 안함',
        value: val,
      };
    }

    if (isDate) {
      return {
        text: val.format('YYYY-MM-DD'),
        value: val,
      };
    }

    return { text: String(val), value: val };
  });
}
