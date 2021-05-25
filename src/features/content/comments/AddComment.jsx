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
import { addComments } from './commentsSlice';

function AddComment({ message, id }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [messageValue, setMessageValue] = useState(message);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCommentChange = (e) => {
    setMessageValue(e.target.value);
  };

  const handleAddClick = () => {
    dispatch(
      addComments({
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
        <DialogTitle>Добавить Комментарий</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleCommentChange}
            type="text"
            variant="outlined"
            fullWidth
            value={messageValue}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleAddClick}>
            Добавить
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddComment;
