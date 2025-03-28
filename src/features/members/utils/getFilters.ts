import type { Member } from '../models/Field';
import type { FieldKey } from '../../../shared/constants/fields';
import dayjs from 'dayjs';

/**
 * 데이터를 기반으로 필터링 옵션 목록을 생성합니다.
 *
 * @param data - 필터링할 데이터 배열 (Member[])
 * @param key - 필터링 기준이 되는 필드 키 (FieldKey)
 * @returns 필터링 옵션 배열 [{ text: string, value: any }]
 */
export function getFilters(data: Member[], key: FieldKey) {
  // 중복 제거 및 null/undefined 값 필터링
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
