import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useMainStyles } from './styles';
import AdminMenu from './admin/AdminMenu';
import { useSelector } from 'react-redux';
import RedactorsMenu from './redactor/ReadactorsMenu';

function Header(props) {
  const classes = useMainStyles();
  const role = useSelector((state) => state.authSlice.role);
  console.log(role);

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.title}>
          Smm-agency
        </Typography>
        {role === 'ADMIN' ? <AdminMenu /> : <RedactorsMenu />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
