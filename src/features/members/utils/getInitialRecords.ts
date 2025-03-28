import { INITIAL_RECORDS } from '../../../shared/constants/initialRecords';
import { storage } from '../../../services/storage';
import { Member } from '../models/Field';
import { deserializeMembers, serializeMember } from './transform';

// 저장소에 데이터가 존재하면 이를 조작해서 반환하고, 그렇지 않으면 초기 데이터를 저장소에 저장하고 반환합니다.
export const getInitialRecords = (): Member[] => {
  const data = storage.getValue();

  // 저장소에 데이터가 없을 경우 초기값 설정
  if (data.length === 0) {
    storage.setValue(INITIAL_RECORDS.map(serializeMember));
    return INITIAL_RECORDS;
  }

  return deserializeMembers(data);
};
