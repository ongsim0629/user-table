import { atom } from 'jotai';
import { getInitialRecords } from '../utils/getInitialRecords';
import type { Member } from '../models/Field';

export const membersAtom = atom<Member[]>(getInitialRecords());
