import { Dropdown, MenuProps } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { theme } from '../styles/theme';
import { useState } from 'react';

interface Props {
  onDelete: () => void;
  onEdit: () => void;
  disabled?: boolean;
}

export function CustomDropdown({ onDelete, onEdit, disabled = false }: Props) {
  const [isPressed, setPressed] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const iconStyle = {
    ...theme.dropdown.icon.base,
    ...(disabled
      ? theme.dropdown.icon.disabled
      : isPressed
        ? theme.dropdown.icon.active
        : isHovered
          ? theme.dropdown.icon.hover
          : {}),
  };

  const items: MenuProps['items'] = [
    { key: 'edit', label: '수정' },
    {
      type: 'divider',
    },
    { key: 'delete', label: <span style={theme.dropdown.delete}>삭제</span> },
  ];

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'delete') onDelete();
    if (key === 'edit') onEdit();
  };

  return (
    <Dropdown
      trigger={['click']}
      menu={{ items, onClick: handleClick }}

      dropdownRender={(menu) => (
        <div
          style={{
            width: theme.dropdown.width,
            height: theme.dropdown.height,
            padding: theme.dropdown.padding,
            borderRadius: theme.dropdown.borderRadius,
          }}
        >
          {menu}
        </div>
      )}
    >
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={iconStyle}
      >
        <MoreOutlined />
      </span>
    </Dropdown>
  );
}
