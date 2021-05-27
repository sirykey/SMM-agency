import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
  Tooltip,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { AddCircleOutline } from '@material-ui/icons';
import { addTask } from './tasksSlice';

function AddTask({ message, id }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [messageValue, setMessageValue] = useState(message);
  const adding = useSelector((state) => state.tasksSlice.adding);
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
      addTask({
        message: messageValue,
        id,
      }),
    );
  };

  return (
    <>
      <Tooltip title="Добавить задачу">
        <IconButton
          color="secondary"
          edge="end"
          aria-label="AddCircleOutline"
          onClick={handleOpen}
        >
          <AddCircleOutline />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить задачу</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleMessageChange}
            type="text"
            variant="outlined"
            fullWidth
            value={messageValue}
          />
        </DialogContent>
        <DialogActions>
          <Button
            disabled={adding}
            color="primary"
            variant="contained"
            onClick={handleAddClick}
          >
            ADD TASK
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddTask;