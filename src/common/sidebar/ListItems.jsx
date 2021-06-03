import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function ListItems() {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Редакторы" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Черновики" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InsertCommentIcon />
        </ListItemIcon>
        <ListItemText primary="Комменты" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Задачи" />
      </ListItem>
    </div>
  );
}

export default ListItems;
