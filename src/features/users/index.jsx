import React from 'react';
import { useMainStyles } from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import Routs from './Routs';

function MainPage(props) {
  const classes = useMainStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Routs />
    </div>
  );
}

export default MainPage;
