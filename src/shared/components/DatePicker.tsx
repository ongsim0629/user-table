import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import { Dayjs } from 'dayjs';
import { theme } from '../styles/theme';

interface Props extends Omit<DatePickerProps<Dayjs>, 'value' | 'onChange' | 'onOk'> {
  value: Dayjs | null;
  onChange?: (date: Dayjs | null) => void;
}

export function CustomDatePicker({ value, onChange, ...rest }: Props) {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      onOk={onChange}
      showToday={false}
      style={{ width: theme.datepicker.width }}
      {...rest}
    />
  );
}
