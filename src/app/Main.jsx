import React from 'react';
import Header from '../common /Header';
import Sidebar from '../common /sidebar/Sidebar';
import Routes from './Routes';

function Main() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes />
    </div>
  );
}

export default Main;