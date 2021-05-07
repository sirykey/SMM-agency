import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import DraftsIcon from '@material-ui/icons/Drafts';

function ListItems(props) {
  const history = useHistory();
  return (
    <div>
      <ListItem button onClick={() => history.push('/agency/redactors')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Redactors" />
      </ListItem>
      <ListItem button onClick={() => history.push('/agency/posts')}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem button onClick={() => history.push('/agency/drafts')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </div>
  );
}

export default ListItems;
