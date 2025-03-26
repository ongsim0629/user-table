import { useEffect, useState } from 'react';
import { storage } from './services/storage/';

function App() {
  const [test, setTest] = useState('');

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
    <div>
      <p>{test || '없음'}</p>
      <input value={test} onChange={handleChange} />
    </div>
  );
}

export default App;
