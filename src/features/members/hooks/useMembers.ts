import { useAtom } from 'jotai';
import { membersAtom } from '../atoms/membersAtom';
import { storage } from '../../../services/storage';
import type { Member } from '../models/Field';

export function useMembers() {
  const [members, setMembers] = useAtom(membersAtom);

  const addMember = (member: Member) => {
    const updated = [...members, member];

    setMembers(updated);
    storage.setValue(updated);
  };

  const deleteMember = (index: number) => {
    const updated = [...members];
    updated.splice(index, 1);
    setMembers(updated);
    storage.setValue(updated);
  };

  return {
    members,
    setMembers,
    addMember,
    deleteMember,
  };
}
