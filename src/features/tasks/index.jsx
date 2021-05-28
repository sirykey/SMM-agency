import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import ListTitle from '../users/ListTitle';
import List from '@material-ui/core/List';
import { Paper } from '@material-ui/core';
import { useProfileStyles } from '../users/styles';

function Tasks({role, userId}) {
  const classes = useProfileStyles();
  const tasks = useSelector(state => state.tasksSlice.tasks)

  return (
    <div>
      <Paper className={classes.paper}>
        <ListTitle>Список всех задач:</ListTitle>
        <List className={classes.list}>

            {tasks.map(task => {
              return <Task task={task} role={role} userId={userId}  />
            })}
        </List>
      </Paper>
    </div>
  );
}

export default Tasks;