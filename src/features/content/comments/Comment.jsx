import React from 'react';
import { Divider, ListItem, ListItemText } from '@material-ui/core';

function Comment(props) {
  return (
    <div>
      <ListItem button>
        <ListItemText>{props.message}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
}

export default Comment;
