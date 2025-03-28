import { FieldKey, FieldType } from '../../../shared/constants/fields';
import { JobOption } from '../../../shared/constants/job';
import type { Dayjs } from 'dayjs';

// 테이블의 각 필드를 정의합니다.
export interface Field {
  key: FieldKey;
  type: FieldType;
  label: string;
  required: boolean;
}

// 회원 정보를 정의합니다.
export interface Member {
  name: string;
  address: string;
  memo: string;
  joinDate: Dayjs;
  job: JobOption;
  email: boolean;
}
