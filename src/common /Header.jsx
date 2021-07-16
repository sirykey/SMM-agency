import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useHeaderStyles } from '../app/styles';
import RightMenu from './RightMenu';

function Header() {
  const classes = useHeaderStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.title}>
          Smm-agency
        </Typography>
        <RightMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
