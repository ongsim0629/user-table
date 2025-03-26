import { Modal, Form, Input } from 'antd';

export default function AddMemberModal({ open, onClose }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log('추가할 데이터:', values);
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal title="회원 추가" open={open} onOk={handleSubmit} onCancel={onClose}>
      <Form layout="vertical" form={form}>
        <Form.Item label="이름" name="name" rules={[{ required: true, message: '이름은 필수입니다.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="주소" name="address">
          <Input />
        </Form.Item>
        <Form.Item label="메모" name="memo">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
}
