import { useEffect, useState } from 'react';
import { storage } from './services/storage/';
import MemberTable from './shared/components/Table';
import CustomModal from './shared/components/Modal';
import { Layout, Button } from 'antd';

const { Header, Content } = Layout;

function App() {
  const [test, setTest] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const test_value = storage.getValue();
    setTest(test_value);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    storage.setValue(val);
    setTest(val);
  };

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

      <div>
        <p>{test || '없음'}</p>
        <input value={test} onChange={handleChange} />
      </div>

      <CustomModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Layout>
  );
}

export default App;
