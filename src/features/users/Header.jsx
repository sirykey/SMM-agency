import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useMainStyles } from './styles';

function Header(props) {
  const classes = useMainStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbarIcon}>
        <Typography variant="h6" noWrap className={classes.title}>
          Smm-agency
        </Typography>
        <IconButton color="inherit" edge="end" aria-label="open drawer">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
