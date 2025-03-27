import { Field } from '../../features/members/models/Field';

export const FIELDS = ['name', 'address', 'memo', 'joinDate', 'job', 'email'] as const;

export type FieldKey = (typeof FIELDS)[number];
export type FieldType = 'text' | 'textarea' | 'date' | 'select' | 'checkbox';

export const FIELD_CONFIG: Record<FieldKey, Omit<Field, 'key'>> = {
  name: { type: 'text', label: '이름', required: true },
  address: { type: 'text', label: '주소', required: false },
  memo: { type: 'textarea', label: '메모', required: false },
  joinDate: { type: 'date', label: '가입일', required: true },
  job: { type: 'select', label: '직업', required: false },
  email: { type: 'checkbox', label: '이메일 수신 동의', required: false },
};
