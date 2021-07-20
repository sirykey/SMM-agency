import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
  ListItemAvatar,
  Tooltip,
  ListItem,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addComments } from './commentsSlice';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function AddComment({ id }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [messageValue, setMessageValue] = useState('');
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
    handleClose()
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Fab size="small" color="primary" aria-label="add">
            <Tooltip title="Add new comment">
              <AddIcon onClick={handleOpen} />
            </Tooltip>
          </Fab>
        </ListItemAvatar>
      </ListItem>
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