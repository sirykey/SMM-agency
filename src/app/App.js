import Auth from '../features/auth/Auth';
import { CssBaseline } from '@material-ui/core';
import Admin from '../features/adminPage/index';
import React from 'react';
import SignUp from '../features/auth/signUp';
import { Redirect, Route, Switch } from 'react-router';
import Content from '../features/content/Content';
import { useSelector } from 'react-redux';
import Headers from '../features/headers';

function App() {
  const token = useSelector((state) => state.token);
  console.log(token);
  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/content" component={Content} />
        <Redirect to="/content" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <div className="container">
      {/*{routes}*/}
      {/*<Route path="/registration" component={SignUp} />*/}
      {/*<Admin />*/}
      {/*<SignUp />*/}
      <Headers />
      <CssBaseline />
    </div>
  );
}

export default App;
