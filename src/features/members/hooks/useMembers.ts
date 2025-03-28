import { useAtom } from 'jotai';
import { membersAtom } from '../atoms/membersAtom';
import { storage } from '../../../services/storage';
import type { Member } from '../models/Field';
import { serializeMember } from '../utils/transform';

/**
 * useMembers 훅은 회원 목록을 관리하기 위한 커스텀 훅입니다.
 * 추가, 삭제, 수정 등의 기능을 제공합니다.
 * 상태는 jotai의 atom을 통해 관리되며, 변경 사항은 storage에 동기화됩니다.
 */
export function useMembers() {
  const [members, setMembers] = useAtom(membersAtom);

  const addMember = (member: Member) => {
    const updated = [...members, member];

    setMembers(updated);
    storage.setValue(updated.map(serializeMember));
  };

  const deleteMember = (index: number) => {
    const updated = members.filter((_, i) => i !== index);
    setMembers(updated);
    storage.setValue(updated.map(serializeMember));
  };

  const updateMember = (index: number, updated: Member) => {
    const newMembers = [...members];
    newMembers[index] = updated;
    setMembers(newMembers);
    storage.setValue(newMembers.map(serializeMember));
  };

  return {
    members,
    setMembers,
    addMember,
    deleteMember,
    updateMember,
  };
}
