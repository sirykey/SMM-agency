import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
  Tooltip,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogContentText from '@material-ui/core/DialogContentText';
import { deleteTask } from './tasksSlice';

function DeleteTask(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <Tooltip title="удалить задачу">
        <IconButton
          color="secondary"
          edge="end"
          aria-label="delete"
          onClick={handleOpen}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={'md'}
        >
          <DialogTitle id="alert-dialog-title">
            Удалить пользователя
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Вы уверенны?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleDeleteTask(props.id)} color="primary">
              Да
            </Button>
            <Button onClick={handleClose} color="secondary" autoFocus>
              Нет
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default DeleteTask;
