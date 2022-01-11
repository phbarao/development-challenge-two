import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2500} style={{ width: '300px' }} />
    </>
  );
};

export default App;
