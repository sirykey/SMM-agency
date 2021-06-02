import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
  CircularProgress, Tooltip,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { changeTaskCompleted, editTask } from './tasksSlice';

function EditTask({ message, id, role, completed, userId }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [messageValue, setMessageValue] = useState(message);

  const editing = useSelector((state) => state.tasksSlice.editing);
  const changing = useSelector((state) => state.tasksSlice.changing);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleMessageChange = (e) => {
    setMessageValue(e.target.value);
  };

  const handleAddClick = () => {
    dispatch(
      editTask({
        message: messageValue,
        id,
      }),
    ).then(() => {
      handleClose();
    });
  };

  const handleChecked = ({ completed, id, userId }) => {
    dispatch(changeTaskCompleted({ completed, id, userId }));
  };

  return (
    <>
      {role === 'ADMIN' ? (
        <Tooltip title='Изменить задачу'>
          <IconButton
            color='primary'
            edge='end'
            aria-label='changed'
            onClick={handleOpen}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      ) : changing ? <CircularProgress size={16} /> : <input type='checkbox' checked={completed} onChange={() => {
        handleChecked({ completed, id, userId });
      }} />}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Изменить черновик</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleMessageChange}
            type='text'
            variant='outlined'
            fullWidth
            value={messageValue}
          />
        </DialogContent>
        <DialogActions>
          {editing ? <CircularProgress size={16} /> : <Button
            color='primary'
            variant='contained'
            onClick={handleAddClick}
            disabled={editing}
          >
            Change task
          </Button>}

          <Button color='secondary' variant='contained' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditTask;