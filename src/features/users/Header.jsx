import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useMainStyles } from './styles';
import AdminMenu from './admin/AdminMenu';

function Header(props) {
  const classes = useMainStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.title}>
          Smm-agency
        </Typography>
        <AdminMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
