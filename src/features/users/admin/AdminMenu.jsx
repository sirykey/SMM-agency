import React from 'react';
import { useMainStyles } from '../styles';
import Header from '../Header';
import Sidebar from '../Sidebar';

function AdminMenu(props) {
  const classes = useMainStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
    </div>
  );
}

export default AdminMenu;
