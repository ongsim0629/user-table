import { atom } from 'jotai';
import { getInitialRecords } from '../utils/getInitialRecords';
import type { Member } from '../models/Field';

/** 
 * 회원 목록을 전역 상태로 관리하기 위한 atom입니다.
 * 초기값은 getInitialRecords()로부터 가져오며,
 * 테이블 렌더링, 회원 추가/삭제/수정 등의 기능에서 사용됩니다.
 */
export const membersAtom = atom<Member[]>(getInitialRecords());
