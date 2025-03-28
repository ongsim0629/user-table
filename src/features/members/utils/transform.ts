import dayjs from 'dayjs';
import type { Member } from '../models/Field';

// Member 인터페이스에서 joinDate를 문자열로 변환한 타입입니다.
export type SerializedMember = Omit<Member, 'joinDate'> & { joinDate: string };

export const serializeMember = (member: Member): SerializedMember => ({
  ...member,
  joinDate: member.joinDate.format('YYYY-MM-DD'), // Dayjs 객체를 문자열로 변환
});

// SerializedMember 타입을 Member 타입으로 변환합니다.
export const deserializeMember = (data: SerializedMember): Member => ({
  ...data,
  joinDate: dayjs(data.joinDate),
});

export const serializeMembers = (members: Member[]): SerializedMember[] => members.map(serializeMember);
export const deserializeMembers = (data: SerializedMember[]): Member[] => data.map(deserializeMember);
