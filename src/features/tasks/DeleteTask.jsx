import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteTask } from './tasksSlice';

function DeleteTask(props) {
  const dispatch = useDispatch();
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
    props.handleClose();
  };

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle>Удалить пользователя</DialogTitle>
        <DialogContent>
          <DialogContentText>Вы уверены?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleDeleteTask(props.id);
            }}
            color="primary"
          >
            Да
          </Button>
          <Button onClick={props.handleClose} color="secondary" autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteTask;
