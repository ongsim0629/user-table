import { Table, Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CustomDropdown } from './Dropdown';

import { Member } from '../../features/members/models/Field';
import { getFields } from '../../features/members/utils/getFields';
import { getFilters } from '../../features/members/utils/getFilters';
import { getInitialRecords } from '../../features/members/utils/getInitialRecords';

export default function MemberTable() {
  const data = getInitialRecords();
  const fields = getFields();
  const columns: ColumnsType<Member> = [
    ...fields.map((field) => ({
      title: field.label,
      dataIndex: field.key,
      key: field.key,
      render: (value: Member[typeof field.key]) => {
        if (field.type === 'date') return new Date(value).toLocaleDateString('ko-KR');
        if (field.type === 'checkbox') return <Checkbox checked={value} disabled />;
        return value;
      },
      // 필터
      filters: getFilters(data, field.key),
    })),
    // 케밥 메뉴
    {
      render: () => <CustomDropdown />,
    },
  ];

  return (
    <Table
      //체크박스 표시용 (용도 뭔지 더 봐야함)
      rowSelection={{}}
      dataSource={data.map((d, i) => ({ ...d, key: i.toString() }))}
      columns={columns}
      pagination={false}
    />
  );
}
