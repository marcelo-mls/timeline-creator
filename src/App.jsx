import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Main from './pages/Main';

function App() {
  return (
    <>
      <Main />
      <ToastContainer position="bottom-center" autoClose={1000} />
    </>
  );
}

export default App;
