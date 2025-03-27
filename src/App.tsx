import { useState } from 'react';
import MemberTable from './shared/components/Table';
import CustomModal from './shared/components/Modal';
import { Layout, Button } from 'antd';
import { Member } from './features/members/models/Field';

const { Header, Content } = Layout;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [initialValues, setInitialValues] = useState<Member | undefined>(undefined);

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
    <Layout>
      <Header style={{ background: '#fff', padding: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <h3>회원목록</h3>
          <Button onClick={openAddModal}>+ 추가</Button>
        </div>
      </Header>

      <Content>
        <MemberTable onEdit={openEditModal} />
      </Content>
      <CustomModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        editIndex={editIndex ?? undefined}
        initialValues={initialValues}
      />
    </Layout>
  );
}

export default App;
