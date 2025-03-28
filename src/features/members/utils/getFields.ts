import { FIELDS, FIELD_CONFIG } from '../../../shared/constants/fields';
import { Field } from '../models/Field';

// FIELDS와 FIELD_CONFIG를 기반으로 Field[] 배열을 생성합니다.
export const getFields = (): Field[] =>
  FIELDS.map((key) => ({
    key,
    ...FIELD_CONFIG[key],
  }));
