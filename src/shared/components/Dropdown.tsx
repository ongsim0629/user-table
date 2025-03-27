import { Dropdown } from 'antd';
// 케밥 메뉴
import { MoreOutlined } from '@ant-design/icons';

export function CustomDropdown() {
  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items: [
          { key: 'edit', label: '수정' },
          // 글자색 빨간색 되게 나중에 css 작업
          { key: 'delete', label: '삭제' },
        ],
      }}
    >
      <MoreOutlined style={{ cursor: 'pointer' }} />
    </Dropdown>
  );
}
