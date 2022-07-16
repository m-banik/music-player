import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@Components/index';
import './styles.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
