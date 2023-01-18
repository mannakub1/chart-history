import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/index';
import Theme from './constants/theme/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App
