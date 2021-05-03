import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AdminMenu from './AdminMenu';
import RedactorMenu from './RedactorMenu';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useMainStyles } from './Styles';

function Header(props) {
  const classes = useMainStyles();

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, props.open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleOpen}
          className={clsx(
            classes.menuButton,
            props.open && classes.menuButtonHidden,
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Smm-Agency
        </Typography>
        <AdminMenu />
        {/* <RedactorMenu /> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
