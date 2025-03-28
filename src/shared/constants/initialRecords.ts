import { Member } from '../../features/members/models/Field';
import { JOB_OPTIONS } from './job';

export const INITIAL_RECORDS: Member[] = [
  {
    name: 'John Doe',
    address: '서울 강남구',
    memo: '외국인',
    joinDate: new Date('2024-10-02'),
    job: JOB_OPTIONS[0],
    email: true,
  },
  {
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    joinDate: new Date('2024-10-01'),
    job: JOB_OPTIONS[1],
    email: false,
  },
];
