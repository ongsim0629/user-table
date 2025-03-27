import { FieldKey, FieldType } from '../../shared/constants/fields';
import { JobOption } from '../../shared/constants/job';

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
  joinDate: Date;
  job: JobOption;
  email: boolean;
}
