import dayjs from 'dayjs';
import type { Member } from '../models/Field';

export type SerializedMember = Omit<Member, 'joinDate'> & { joinDate: string };

export const serializeMember = (member: Member): SerializedMember => ({
  ...member,
  joinDate: member.joinDate.format('YYYY-MM-DD'),
});

export const deserializeMember = (data: SerializedMember): Member => ({
  ...data,
  joinDate: dayjs(data.joinDate),
});

export const serializeMembers = (members: Member[]): SerializedMember[] => members.map(serializeMember);

export const deserializeMembers = (data: SerializedMember[]): Member[] => data.map(deserializeMember);
