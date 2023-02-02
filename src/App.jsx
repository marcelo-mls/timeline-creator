import React from 'react';
import { ToastContainer } from 'react-toastify';

import Main from './pages/Main';

function App() {
  return (
    <>
      <Main />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
