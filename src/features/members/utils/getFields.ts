import { FIELDS, FIELD_CONFIG } from '../../../shared/constants/fields';
import { Field } from '../models/Field';

// Field[] 배열을 만들어주는 함수
export const getFields = (): Field[] =>
  FIELDS.map((key) => ({
    key,
    ...FIELD_CONFIG[key],
  }));
