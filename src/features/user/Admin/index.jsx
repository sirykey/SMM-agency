import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import SignUp from '../signUp';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IconButton, MenuItem } from '@material-ui/core'
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { AccountCircle } from '@material-ui/icons';
import AdminListItems from './ListItims';
import Profile from './Profile';
import Posts from '../../post/Posts';
import Redactors from './Redactors';
import Drafts from '../../post/Drafts';
import Blog from '../../post/Blog'
import { Route } from 'react-router';
import { useMainStyles } from './Styles';

export default function Admin() {
  const history = useHistory();
  
  const classes = useMainStyles();
  
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openMenu, setOpenMenu] = useState(null)
  const handleClick = (e) => {
    setOpenMenu(e.currentTarget)
  }

  const handleClose = () => {
    setOpenMenu(null)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
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
          <IconButton
            color="inherit"
            edge='end'
            aria-label="open drawer"
            onClick={handleClick}
          >
            <Badge color="secondary">
              <AccountCircle />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={openMenu}
            keepMounted
            open={Boolean(openMenu)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} onClick={() => history.push('/admin')}>My Account</MenuItem>
            <MenuItem onClick={handleClose} onClick={() => history.push('/admin/signup')}>Sign Up</MenuItem>
            <MenuItem onClick={handleClose}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <AdminListItems />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
            <Route exact path="/admin" component={Profile} />
            <Route path="/admin/redactors" component={Redactors} />
            <Route path="/admin/posts" component={Posts} />
            <Route path="/admin/drafts" component={Drafts} />
            <Route path="/admin/signup" component={SignUp} />
            <Route path="/admin/blog" component={Blog} />
      </main>
    </div>
  );
}
