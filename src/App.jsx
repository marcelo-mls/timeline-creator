import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppProvider from './context/AppProvider';

import Main from './pages/Main';

function App() {
  return (
    <AppProvider>
      <Main />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </AppProvider>
  );
}

export default App;
