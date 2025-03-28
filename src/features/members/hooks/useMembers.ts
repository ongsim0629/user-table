import { useAtom } from 'jotai';
import { membersAtom } from '../atoms/membersAtom';
import { storage } from '../../../services/storage';
import type { Member } from '../models/Field';
import { serializeMember } from '../utils/transform';

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
