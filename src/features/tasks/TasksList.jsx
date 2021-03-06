import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TasksItem from './TasksItem';
import { fetchOneTask, fetchTasks } from './tasksSlice';
import { useDraftStyles } from '../drafts /styles';
import { Container, Grid, List, Paper, Typography } from '@material-ui/core';

function TasksList() {
  const classes = useDraftStyles();
  const tasks = useSelector((state) => state.tasksSlice.tasks);
  const authUser = useSelector(state => state.authSlice.id)
  const role = useSelector((state) => state.authSlice.role);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(role === 'ADMIN' ? fetchTasks() : fetchOneTask(authUser));
  }, [dispatch, authUser, role]);

  return (
    <>
      <Container className={classes.mainGrid}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Задачи:
            </Typography>
            <List className={classes.list}>
              {tasks.map((task) => {
                return <TasksItem task={task} />;
              })}
            </List>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}

export default TasksList;
