import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AdminListItems from './ListItims';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';

import { useMainStyles } from './Styles';

function SideBar(props) {
  const classes = useMainStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !props.open && classes.drawerPaperClose,
        ),
      }}
      open={props.open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={props.handleClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <AdminListItems />
      </List>
    </Drawer>
  );
}

export default SideBar;
