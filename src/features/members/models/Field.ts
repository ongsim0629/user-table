import { FieldKey, FieldType } from '../../../shared/constants/fields';
import { JobOption } from '../../../shared/constants/job';
import type { Dayjs } from 'dayjs';

export interface Field {
  key: FieldKey;
  type: FieldType;
  label: string;
  required: boolean;
}

export interface Member {
  name: string;
  address: string;
  memo: string;
  joinDate: Dayjs;
  job: JobOption;
  email: boolean;
}
