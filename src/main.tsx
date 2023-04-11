import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { theme } from '@procedural-render/styles';
import { ThemeProvider } from 'styled-components';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
