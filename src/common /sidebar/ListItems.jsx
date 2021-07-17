import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import { useHistory } from 'react-router-dom';

function ListItems() {
  const history = useHistory()
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Редакторы" onClick={() => history.push('/agency/redactors')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Черновики" onClick={() => history.push('/agency')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InsertCommentIcon />
        </ListItemIcon>
        <ListItemText primary="Комменты" onClick={() => history.push('/agency/comments')} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="Задачи" onClick={() => history.push('/agency/tasks')} />
      </ListItem>
    </div>
  );
}

export default ListItems;
