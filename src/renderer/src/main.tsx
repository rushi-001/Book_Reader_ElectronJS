import { BooksProvider, ThemeProvider } from '@/context';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </ThemeProvider>
  </StrictMode>
)
