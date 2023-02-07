import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';

import Main from './pages/Main';
import darkTheme from './services/themeColor';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </ThemeProvider>
  );
}

export default App;
