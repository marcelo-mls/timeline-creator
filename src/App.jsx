import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';

import Main from './pages/Main';
import AppProvider from './context/AppProvider';
import darkTheme from './services/style/themeColor';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={darkTheme}>
        <Main />
        <ToastContainer position="bottom-center" autoClose={1000} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
