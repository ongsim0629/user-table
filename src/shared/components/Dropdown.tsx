import { Dropdown, MenuProps } from 'antd';
// 케밥 메뉴
import { MoreOutlined } from '@ant-design/icons';

interface Props {
  onDelete: () => void;
}

export function CustomDropdown({ onDelete }: Props) {
  const items: MenuProps['items'] = [
    { key: 'edit', label: '수정' },
    {
      key: 'delete',
      label: '삭제',
      danger: true,
      onClick: () => onDelete(),
    },
  ];

  return (
    <Dropdown trigger={['click']} menu={{ items }}>
      <MoreOutlined style={{ cursor: 'pointer' }} />
    </Dropdown>
  );
}
