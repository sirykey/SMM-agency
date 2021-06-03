import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

function CommentsItem({ comment }) {
  return (
    <div>
      <ListItem button>
        <ListItemText>{comment.message}</ListItemText>
      </ListItem>
    </div>
  );
}

export default CommentsItem;
