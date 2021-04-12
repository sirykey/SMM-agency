import Auth from '../features/auth/Auth';
import { CssBaseline } from '@material-ui/core';
import Admin from '../features/adminPage/index';
import React from 'react';
import SignUp from '../features/auth/signUp';
import { Route, Switch } from 'react-router';
import Content from '../features/content/Content';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/content" component={Content} />
        <Route path="/registration" component={SignUp} />
        {/*<Admin />*/}
        <CssBaseline />
      </Switch>
    </div>
  );
}

export default App;
