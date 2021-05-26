import React, { useEffect } from 'react';
import { useMainStyles } from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import Routs from './Routs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { fetchHeaders } from '../content/contentSlice';
import { fetchAllTasks, fetchOneWorkerTasks } from '../tasks/tasksSlice';

function MainPage() {
  const classes = useMainStyles();
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.authSlice)
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchHeaders());
    dispatch(fetchAllTasks());
    dispatch(fetchOneWorkerTasks(authUser.id))
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <Routs />
    </div>
  );
}

export default MainPage;
