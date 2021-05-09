import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

function AddPost() {
  return (
    <div>
      <ListItem>
              <ListItemAvatar>
              <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              </ListItemAvatar>
              <ListItemText
               primary="Добавить новый пост"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
    </div>
  )
}

export default AddPost;
