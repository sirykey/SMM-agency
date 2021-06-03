import Auth from '../features/auth/Auth';
import { CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { api } from './api';
import Routes from './Routes';

function App() {
  const token = useSelector((state) => state.authSlice.token);
  const role = useSelector((state) => state.authSlice.role);

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

  if (autologinning) {
    return 'Идет проверка профиля';
  }

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route>
          <Routes path="/main" component={App} />
          <Redirect to="/main" />
        </Route>
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
    <>
      {routes && (
        <div>
          <Routes />
        </div>
      )}
      <CssBaseline />
    </>
  );
}

export default App;
