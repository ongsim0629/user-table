import { useState } from 'react';
import MemberTable from './shared/components/Table';
import CustomModal from './shared/components/Modal';
import { Layout, Button, message } from 'antd';
import { Member } from './features/members/models/Field';
import { theme } from './shared/styles/theme';
import { PlusOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [initialValues, setInitialValues] = useState<Member | undefined>(undefined);
  const [messageApi, contextHolder] = message.useMessage();

  const openAddModal = () => {
    setEditIndex(null);
    setInitialValues(undefined);
    setModalOpen(true);
  };

  const openEditModal = (index: number, member: Member) => {
    setEditIndex(index);
    setInitialValues(member);
    setModalOpen(true);
  };

  return (
    <>
      {contextHolder}
      <Layout>
        <Header style={theme.layout.header}>
          <h3 style={theme.layout.title}>회원 목록</h3>
          <Button type="primary" icon={<PlusOutlined />} style={theme.layout.addButton} onClick={openAddModal}>
            추가
          </Button>
        </Header>

        <Content>
          <MemberTable onEdit={openEditModal} />
        </Content>
        <CustomModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          editIndex={editIndex ?? undefined}
          initialValues={initialValues}
          messageApi={messageApi}
        />
      </Layout>
    </>
  );
}

export default App;
