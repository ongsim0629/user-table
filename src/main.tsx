import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ConfigProvider } from 'antd';
import antdTheme from './shared/styles/antdTheme';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);
