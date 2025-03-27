import { useState } from 'react';
import MemberTable from './shared/components/Table';
import CustomModal from './shared/components/Modal';
import { Layout, Button } from 'antd';

const { Header, Content } = Layout;

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <Header style={{ background: '#fff', padding: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <h3>회원목록</h3>
          <Button onClick={() => setModalOpen(true)}>+ 추가</Button>
        </div>
      </Header>

      <Content>
        <MemberTable />
      </Content>
      <CustomModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Layout>
  );
}

export default App;
