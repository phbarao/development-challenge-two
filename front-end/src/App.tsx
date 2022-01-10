import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />;
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
