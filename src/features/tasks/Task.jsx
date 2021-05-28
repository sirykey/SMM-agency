import React from 'react';
import { Divider, ListItem, ListItemText } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

function Task({task, role, userId }) {

  return (
    <>
      <ListItem button>
      <ListItemText>{task.message}</ListItemText>
      <ListItemSecondaryAction>
        <EditTask message={task.message} id={task._id} role={role} completed={task.completed} userId={userId} />
        {role === 'ADMIN'? <DeleteTask id={task._id} />: '' }
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
    </>
  );
}

export default Task;