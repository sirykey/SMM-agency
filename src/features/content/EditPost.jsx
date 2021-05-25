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
import { useAddPostStyles } from '../users/styles';
import { editHeader } from './contentSlice';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

function EditPost({title, text, id}) {
  const classes = useAddPostStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [textValue, setTextValue] = useState(text);

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
      editHeader({
        title: titleValue,
        text: textValue,
        id
      }),
    );
  };

  return (
    <>
      <IconButton
        className={classes.btn}
        color="primary"
        edge="end"
        aria-label="changed"
        onClick={handleOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Изменить черновик</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleTitleChange}
            type="text"
            variant="outlined"
            fullWidth
            value={titleValue}
          />
          <TextField
            className={classes.form}
            onChange={handleTextChange}
            type="text"
            value={textValue}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleAddClick}>
            Change post
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditPost;