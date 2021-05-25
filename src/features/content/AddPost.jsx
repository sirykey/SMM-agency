import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Dialog,
  Tooltip,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useAddPostStyles } from '../users/styles';
import { addHeader } from './contentSlice';

function AddPost() {
  const classes = useAddPostStyles();
  const dispatch = useDispatch();
  const adding = useSelector((state) => state.contentSlice.adding);

  const [open, setOpen] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };
  const handleAddClick = () => {
    dispatch(
      addHeader({
        title: titleValue,
        text: textValue,
      }),
    );
  };
  if (adding) {
    return 'идет добавление';
  }
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Fab size="small" color="primary" aria-label="add">
            <Tooltip title="Add new post">
              <AddIcon onClick={handleOpen} />
            </Tooltip>
          </Fab>
        </ListItemAvatar>
      </ListItem>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Новый черновик</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleTitleChange}
            type="text"
            label="Введите заголовок"
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.form}
            onChange={handleTextChange}
            type="text"
            label="Введите текст"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleAddClick}>
            Add Post
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddPost;
