import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/index';
import Theme from './constants/theme/theme';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Home title="ข้อมูลตลาดรองย้อนหลัง" maxWidth='md'/>
    </ThemeProvider>
  );
}

export default App
