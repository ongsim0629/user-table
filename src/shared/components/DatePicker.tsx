import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';

interface Props extends DatePickerProps {
  // 설계할 때 Date로 받아서 일단 구현 하는데 나중에 dayjs로 리팩토링
  value: Date;
  onChange?: (date: Date | null) => void;
}

export function CustomDatePicker({ value, onChange }: Props) {
  return (
    <DatePicker
      value={dayjs(value)}
      onChange={(date) => {
        if (onChange) onChange(date ? date.toDate() : null);
      }}
      showToday={false}
    />
  );
}
