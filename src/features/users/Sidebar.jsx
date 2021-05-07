import React from 'react';
import { useMainStyles } from './styles';
import { Drawer, List, Toolbar } from '@material-ui/core';
import ListItems from './ListItems';

function Sidebar(props) {
  const classes = useMainStyles();
  return (
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
          <ListItems />
        </List>
      </div>
    </Drawer>
  );
}

export default Sidebar;
