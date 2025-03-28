import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { theme } from '../styles/theme';

interface Props extends Omit<DatePickerProps, 'value' | 'onChange' | 'onOk'> {
  value: Date | null;
  onChange?: (date: Date | null) => void;
}

export function CustomDatePicker({ value, onChange, ...rest }: Props) {
  return (
    <DatePicker
      value={value ? dayjs(value) : null}
      onChange={(date) => {
        onChange?.(date ? date.toDate() : null);
      }}
      onOk={(date: Dayjs | null) => {
        onChange?.(date ? date.toDate() : null);
      }}
      showToday={false}
      style={{ width: theme.datepicker.width }}
      {...rest}
    />
  );
}
