import React from 'react';
import { useMainStyles } from './styles';
import { Drawer, List, ListItem } from '@material-ui/core';

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
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button>Hello</ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default Sidebar;
