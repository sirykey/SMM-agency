import Auth from '../features/auth/Auth';
import { CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { api } from './api';
import AdminMenu from '../features/users/admin/AdminMenu';
import MainPage from '../features/users';

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
        <Route path="/agency" component={MainPage} />
        <Redirect to="/agency" />
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
      <CssBaseline />
    </div>
  );
}

export default App;
