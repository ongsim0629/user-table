import { Dropdown, MenuProps, Modal, message } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { theme } from '../styles/theme';
import React, { useState } from 'react';

interface Props {
  onDelete: () => void;
  onEdit: () => void;
  disabled?: boolean;
}

export function CustomDropdown({ onDelete, onEdit, disabled = false }: Props) {
  const [isPressed, setPressed] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (key === 'delete') {
      setIsModalOpen(true);
    }
    if (key === 'edit') onEdit();
  };

  const handleOk = () => {
    onDelete();
    message.success('항목이 삭제되었습니다.');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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

      <Modal
        title="정말 삭제하시겠습니까?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="삭제"
        okType="danger"
        cancelText="취소"
      >
        <p>삭제된 항목은 복구할 수 없습니다.</p>
      </Modal>
    </>
  );
}
