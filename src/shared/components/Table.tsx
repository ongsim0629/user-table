import { Table, Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CustomDropdown } from './Dropdown';

import { Member } from '../../features/members/models/Field';
import { getFields } from '../../features/members/utils/getFields';
import { getFilters } from '../../features/members/utils/getFilters';
import { useMembers } from '../../features/members/hooks/useMembers';

export default function MemberTable() {
  const { members, deleteMember } = useMembers();
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
      filters: getFilters(members, field.key),
    })),
    // 케밥 메뉴
    {
      render: (_, record, index) => <CustomDropdown onDelete={() => deleteMember(index)} />,
    },
  ];

  return (
    <Table
      rowSelection={{}}
      dataSource={members.map((d, i) => ({ ...d, key: i.toString() }))}
      columns={columns}
      pagination={false}
    />
  );
}
