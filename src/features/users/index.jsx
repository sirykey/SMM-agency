import React, { useEffect } from 'react';
import { useMainStyles } from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import Routs from './Routs';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { fetchHeaders } from '../content/contentSlice';
import { fetchAllTasks } from '../tasks/taskSlice';
import { fetchComments } from '../content/comments/commentsSlice';

function MainPage(props) {
  const classes = useMainStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchHeaders());
    dispatch(fetchAllTasks());
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
