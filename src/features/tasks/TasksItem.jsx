import React, { useState } from 'react';
import { object } from 'prop-types';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteTask from './DeleteTask';

function TasksItem({ task }) {
  console.log(task);
  const [open, setOpen] = useState(false);
  const handleDeleteAlertOpen = () => {
    setOpen(true);
  };
  const handleDeleteAlertClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ListItem button>
        <ListItemText primary={`${task.message}`} />
        <ListItemSecondaryAction>
          <Tooltip title="Удалить задачу">
            <IconButton color="secondary" onClick={handleDeleteAlertOpen}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <DeleteTask
        open={open}
        handleClose={handleDeleteAlertClose}
        id={task._id}
      />
    </>
  );
}

TasksItem.propTypes = {
  task: object,
};
export default TasksItem;
