import React from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogTitle } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { deleteComment } from './commentsSlice';

function DeleteComment(props) {
  const dispatch = useDispatch();
  const handleDelete = (id, commentId) => {
    dispatch(deleteComment({ commentId, id }));
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} maxWidth="md">
        <DialogTitle id="alert-dialog-title"> Удалить комментарий?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверенны?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleDelete(props.id, props.commentId)}
            color="primary"
          >
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

export default DeleteComment;