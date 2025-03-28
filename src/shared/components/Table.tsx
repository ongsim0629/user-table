import { Table, Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CustomDropdown } from './Dropdown';
import { theme } from '../styles/theme';
import React from 'react';

import { Member } from '../../features/members/models/Field';
import { getFields } from '../../features/members/utils/getFields';
import { getFilters } from '../../features/members/utils/getFilters';
import { useMembers } from '../../features/members/hooks/useMembers';

interface Props {
  onEdit: (index: number, member: Member) => void;
}

export default function MemberTable({ onEdit }: Props) {
  const { members, deleteMember } = useMembers();
  const fields = getFields();
  const columns: ColumnsType<Member> = [
    ...fields.map((field) => ({
      title: field.label,
      dataIndex: field.key,
      ellipsis: true,
      key: field.key,

      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
      }: {
        setSelectedKeys: (keys: React.Key[]) => void;
        selectedKeys: React.Key[];
        confirm: (param?: { closeDropdown: boolean }) => void;
      }) => (
        <div style={{ padding: 8 }}>
          {getFilters(members, field.key).map((filter) => {
            const valueStr: React.Key = filter.value?.toString() ?? '';
            return (
              <div key={valueStr}>
                <Checkbox
                  checked={selectedKeys.includes(valueStr)}
                  onChange={(e) => {
                    const newKeys = e.target.checked
                      ? [...selectedKeys, valueStr]
                      : selectedKeys.filter((k) => k !== valueStr);
                    setSelectedKeys(newKeys);
                    confirm({ closeDropdown: false });
                  }}
                >
                  {filter.text}
                </Checkbox>
              </div>
            );
          })}
        </div>
      ),

      onFilter: (value: boolean | React.Key, record: Member) => {
        const fieldValue = record[field.key];
        if (fieldValue == null) return false;
        return fieldValue.toString().includes(String(value));
      },

      onHeaderCell: () => ({
        style: {
          ...theme.table.cellStyle,
          ...theme.table.columns[field.key as keyof typeof theme.table.columns],
        },
      }),
      onCell: () => ({
        style: {
          ...theme.table.cellStyle,
          width: theme.table.columns[field.key as keyof typeof theme.table.columns].width,
        },
      }),

      render: (value: Member[typeof field.key]) => {
        if (field.type === 'date') {
          if (value instanceof Date) {
            return value.toISOString().slice(0, 10);
          }
          if (typeof value === 'string' || typeof value === 'number') {
            const parsed = new Date(value);
            return isNaN(parsed.getTime()) ? '' : parsed.toISOString().slice(0, 10);
          }
          return '';
        }

        if (field.type === 'checkbox') {
          return <Checkbox checked={Boolean(value)} disabled={theme.table.checkbox.disabled ?? false} />;
        }

        return typeof value === 'object' ? JSON.stringify(value) : String(value);
      },
    })),
    // 케밥 메뉴
    {
      key: 'actions',
      title: '',
      onHeaderCell: () => ({
        style: {
          ...theme.table.cellStyle,
          ...theme.table.columns.actions,
        },
      }),
      onCell: () => ({
        style: {
          ...theme.table.cellStyle,
          ...theme.table.columns.actions,
        },
      }),
      render: (_, record, index) => (
        <CustomDropdown onDelete={() => deleteMember(index)} onEdit={() => onEdit(index, record)} />
      ),
    },
  ];

  return (
    <Table
      rowSelection={{
        columnWidth: theme.table.rowSelection.columnWidth,
      }}
      dataSource={members.map((d, i) => ({ ...d, key: i.toString() }))}
      columns={columns}
      pagination={false}
      size={theme.table.size}
      bordered={theme.table.bordered}
      style={theme.table.style}
    />
  );
}
