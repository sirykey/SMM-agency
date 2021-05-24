import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { AddCircleOutline } from '@material-ui/icons';
import { addTasks } from './taskSlice';

function AddTask({ message, id}) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [messageValue, setMessageValue] = useState(message);

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
      addTasks({
        message: messageValue,
        id,
      }),
    );
  };

  return (
    <>
      <IconButton
        color="secondary"
        edge="end"
        aria-label="AddCircleOutline"
        onClick={handleOpen}
      >
        <AddCircleOutline />
      </IconButton>
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
          <Button color="primary" variant="contained" onClick={handleAddClick}>
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
