import { useState } from 'react';
import { Modal, Form, Input, Select, Checkbox } from 'antd';
import { getFields } from '../../features/members/utils/getFields';
import { JOB_OPTIONS } from '../../shared/constants/job';
import { CustomDatePicker } from './DatePicker';
import { useMembers } from '../../features/members/hooks/useMembers';

export default function CustomModal({ open, onClose }) {
  const [disabled, setDisabled] = useState(true);
  const [form] = Form.useForm();
  const fields = getFields();
  const { addMember } = useMembers();

  // 필수 값 검사
  const handleFormChange = (): void => {
    const filledRequired = fields
      .filter((field) => field.required)
      .every((field) => {
        const value = form.getFieldValue(field.key);
        return value !== undefined;
      });
    setDisabled(!filledRequired);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const newMember = {
          ...values,
          joinDate: new Date(values.joinDate),
        };

        addMember(newMember);

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
          <Select>
            {JOB_OPTIONS.map((job) => (
              <Select.Option key={job} value={job}>
                {job}
              </Select.Option>
            ))}
          </Select>
        );
      case 'date':
        return <CustomDatePicker />;
      case 'checkbox':
        return <Checkbox />;
      default:
        return null;
    }
  };

  return (
    <Modal
      title="회원 추가"
      open={open}
      onOk={handleSubmit}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
      okText="저장"
      cancelText="취소"
      okButtonProps={{ disabled }}
    >
      <Form layout="vertical" form={form} onFieldsChange={handleFormChange}>
        {fields.map((field) => (
          <Form.Item
            name={field.key}
            key={field.key}
            label={field.label}
            rules={field.required ? [{ required: true }] : []}
            initialValue={field.type === 'checkbox' ? false : undefined}
            valuePropName={field.type === 'checkbox' ? 'checked' : 'value'}
          >
            {renderInput(field.type)}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
}
