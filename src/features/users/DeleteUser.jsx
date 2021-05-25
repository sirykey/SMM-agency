import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from './usersSlice';

function DeleteUser(props) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">Удалить пользователя</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверенны?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(props.id)} color="primary">
            Да
          </Button>
          <Button onClick={props.handleClose} color="secondary" autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteUser;
