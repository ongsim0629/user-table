import { Dropdown, MenuProps } from 'antd';
// 케밥 메뉴
import { MoreOutlined } from '@ant-design/icons';

interface Props {
  onDelete: () => void;
  onEdit: () => void;
}

export function CustomDropdown({ onDelete, onEdit }: Props) {
  const items: MenuProps['items'] = [
    { key: 'edit', label: '수정' },
    { key: 'delete', label: <span style={{ color: 'red' }}>삭제</span> },
  ];

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'delete') onDelete();
    if (key === 'edit') onEdit();
  };

  return (
    <Dropdown trigger={['click']} menu={{ items, onClick: handleClick }}>
      <MoreOutlined style={{ cursor: 'pointer' }} />
    </Dropdown>
  );
}
