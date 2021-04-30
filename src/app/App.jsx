import Auth from '../features/auth/Auth';
import { CssBaseline } from '@material-ui/core';
import Admin from '../features/adminPage/index';
import React, { useEffect, useState } from 'react';
import SignUp from '../features/auth/signUp';
import { Redirect, Route, Switch } from 'react-router';
import Content from '../features/content/Content';
import { useSelector } from 'react-redux';
import Headers from '../features/headers';
import { api } from './api';

function App() {
  const token = useSelector((state) => state.authSlice.token);
  const [autologinning, setAutologinning] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    };
  }, [token]);

  useEffect(() => {
    if (autologinning) {
      (async () => {
        try {
          const autologin = await api.post('/autologin');
          if (autologin.data.status === 'success') {
            setLoggedIn(true);
          }
        } catch (e) {
          console.error(e);
        } finally {
          setAutologinning(false);
        }
      })();
    }
  }, [loggedIn, autologinning, setAutologinning, setLoggedIn, token]);

  // if (token) {
  //   return 'Идет проверка профиля';
  // }

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/headers" component={Headers} />
        <Redirect to="/headers" />
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
      {routes}
      {/*<Route path="/registration" component={SignUp} />*/}
      {/*<Admin />*/}
      {/*<SignUp />*/}
      {/*<Headers />*/}
      <CssBaseline />
    </div>
  );
}

export default App;
