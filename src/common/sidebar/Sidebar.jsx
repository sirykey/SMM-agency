import React from 'react';
import { Drawer, List, Toolbar } from '@material-ui/core';
import { useSidebarStyles } from '../../app/styles';
import ListItems from './ListItems';

function Sidebar() {
  const classes = useSidebarStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
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
