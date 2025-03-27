import { INITIAL_RECORDS } from '../../../shared/constants/initialRecords';
import { storage } from '../../../services/storage';
import { Member } from '../models/Field';

export const getInitialRecords = (): Member[] => {
  const data = storage.getValue();

  if (data.length === 0) {
    storage.setValue(INITIAL_RECORDS);
    return INITIAL_RECORDS;
  }

  return data;
};
