import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './tasksSlice';

function AddTask({ id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [messageValue, setMessageValue] = useState('');
  const adding = useSelector((state) => state.tasksSlice.adding);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTaskChange = (e) => {
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
          color="primary"
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
            onChange={handleTaskChange}
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
            Добавить задачу
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddTask;
