import React, { useEffect, useState } from 'react';
import { Divider, ListItem, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteComment from './DeleteComment';

function Comment(props) {
  const [open, setOpen] = useState(false);
  const handleDeleteCommentOpen = () => {
    setOpen(true);
  };
  const handleDeleteCommentClose = () => {
    setOpen(false);
  };
  console.log(props);
  return (
    <div>
      <ListItem button>
        <ListItemText>{props.comment.message}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            color="secondary"
            edge="end"
            aria-label="delete"
            onClick={handleDeleteCommentOpen}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider />
      <DeleteComment
        open={open}
        handleClose={handleDeleteCommentClose}
        id={props.id}
        commentId={props.comment._id}
      />
    </div>
  );
}

export default Comment;
