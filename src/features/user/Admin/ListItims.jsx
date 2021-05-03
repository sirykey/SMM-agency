import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useHistory } from 'react-router-dom';

export default function AdminListItems() {
  const history = useHistory();

  return (
    <div>
      <ListItem button onClick={() => history.push('/admin/redactors')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Redactors" />
      </ListItem>
      <ListItem button onClick={() => history.push('/admin/posts')}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem button onClick={() => history.push('/admin/drafts')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </div>
  );
}

export const redactorListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
