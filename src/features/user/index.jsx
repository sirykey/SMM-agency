import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Main';
import { useMainStyles } from './Styles';
import Header from './Header';
import SideBar from './SideBar';

export default function Admin() {
  const classes = useMainStyles();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleOpen={handleDrawerOpen} />
      <SideBar open={open} handleClose={handleDrawerClose} />
      <Main />
    </div>
  );
}
