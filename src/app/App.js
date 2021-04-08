import Auth from '../features/auth/Auth';
import { CssBaseline } from '@material-ui/core';
import Admin from '../features/adminPage/index';
import React from 'react';
import SignUp from '../features/auth/signUp';

function App() {
  return (
    <div className="container">
      {/*<Auth />*/}
      {/*<Admin />*/}
      <SignUp />
      <CssBaseline />
    </div>
  );
}

export default App;
