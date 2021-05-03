import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';
import { IconButton, useTheme } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // toolbarIcon: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'flex-end',
    //   padding: '0 8px',
    //   ...theme.mixins.toolbar,
    // },
    // appBarShift: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   transition: theme.transitions.create(['margin', 'width'], {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    //   marginRight: drawerWidth,
    // },
    // hide: {
    //   display: 'none',
    // },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Redactor(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(classes);

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBar)}
      >
        <Toolbar className={classes.toolbarIcon}>
          <Typography variant="h6" noWrap className={classes.title}>
            Smm-agency
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>мои посты</ListItem>
            <ListItem button>мои посты</ListItem>
            <ListItem button>мои посты</ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              fdfdfsdf
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Redactor;
