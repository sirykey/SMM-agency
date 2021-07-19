import React, { useState } from 'react';
import { Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteComment from './DeleteComment';

function CommentsItem({ comment, id }) {;
  const [open, setOpen] = useState(false);
  const handleDeleteCommentOpen = () => {
    setOpen(true);
  };
  const handleDeleteCommentClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ListItem>
        <ListItemText>{comment.message}</ListItemText>
        <ListItemSecondaryAction>
          <Tooltip title="Удалить комментарий">
            <IconButton
              color="secondary"
              edge="end"
              aria-label="delete"
              onClick={handleDeleteCommentOpen}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider />
      <DeleteComment
        open={open}
        handleClose={handleDeleteCommentClose}
        id={id}
        commentId={comment._id}
      />
    </div>
  );
}

export default CommentsItem;
