import { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Checkbox } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import { getFields } from '../../features/members/utils/getFields';
import { JOB_OPTIONS } from '../../shared/constants/job';
import { CustomDatePicker } from './DatePicker';
import { useMembers } from '../../features/members/hooks/useMembers';
import { Member } from '../../features/members/models/Field';
import { theme } from '../styles/theme';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  initialValues?: Member;
  editIndex?: number;
  messageApi: MessageInstance;
}

export default function CustomModal({ open, onClose, initialValues, editIndex, messageApi }: CustomModalProps) {
  const [disabled, setDisabled] = useState(true);
  const [form] = Form.useForm();
  const fields = getFields();
  const { addMember, updateMember } = useMembers();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        ...initialValues,
        joinDate: initialValues.joinDate,
      });
      setDisabled(false); // 수정 모드에서는 활성화
    } else {
      form.resetFields();
      form.setFieldsValue({
        job: '개발자',
      });
      setDisabled(true); // 추가 모드에서는 비활성화로 초기화
    }
  }, [initialValues, form]);

  // 필수 값 검사
  const handleFormChange = (): void => {
    const filledRequired = fields
      .filter((field) => field.required)
      .every((field) => {
        const value = form.getFieldValue(field.key);
        return value !== undefined && value !== null && value !== '';
      });
    setDisabled(!filledRequired);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const newMember = {
          ...values,
          joinDate: values.joinDate,
        };

        if (editIndex !== undefined) {
          updateMember(editIndex, newMember);
          messageApi.success('회원 정보가 수정되었습니다.');
        } else {
          addMember(newMember);
          messageApi.success('회원이 성공적으로 추가되었습니다.');
        }

        form.resetFields();
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderInput = (type: string) => {
    switch (type) {
      case 'text':
        return <Input placeholder="Input" />;
      case 'textarea':
        return <Input.TextArea placeholder="Textarea" />;
      case 'select':
        return (
          <Select
            dropdownMatchSelectWidth={false}
            style={{
              ...theme.select.default,
            }}
            dropdownStyle={{
              ...theme.select.dropdown,
            }}
            optionRender={(oriOption) => {
              const label = typeof oriOption.label === 'string' ? oriOption.label : String(oriOption.label);
              const isSelected = label === form.getFieldValue('job');

              return (
                <div
                  style={{
                    ...theme.select.option.default,
                    ...(isSelected ? theme.select.option.selected : {}),
                  }}
                >
                  {label}
                </div>
              );
            }}
          >
            {JOB_OPTIONS.map((job) => (
              <Select.Option key={job} value={job}>
                {job}
              </Select.Option>
            ))}
          </Select>
        );
      case 'date':
        return (
          <CustomDatePicker
            value={form.getFieldValue('joinDate') || null}
            onChange={(date) => form.setFieldValue('joinDate', date)}
          />
        );
      case 'checkbox':
        return <Checkbox />;
      default:
        return null;
    }
  };

  return (
    <Modal
      title={editIndex !== undefined ? '회원 수정' : '회원 추가'}
      open={open}
      onOk={handleSubmit}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
      okText={editIndex !== undefined ? '수정' : '추가'}
      cancelText="취소"
      okButtonProps={{ disabled }}
      style={theme.modal}
      width={theme.modal.width}
      bodyStyle={theme.modal.body}
    >
      <div style={theme.modal.formWrapper}>
        <Form form={form} onFieldsChange={handleFormChange} layout={theme.form.layout}>
          {fields.map((field) => (
            <Form.Item
              name={field.key}
              key={field.key}
              label={field.label}
              rules={field.required ? [{ required: true }] : []}
              initialValue={field.key === 'job' ? '개발자' : field.type === 'checkbox' ? false : undefined}
              valuePropName={field.type === 'checkbox' ? 'checked' : 'value'}
              style={theme.form.item}
            >
              {renderInput(field.type)}
            </Form.Item>
          ))}
        </Form>
      </div>
    </Modal>
  );
}
