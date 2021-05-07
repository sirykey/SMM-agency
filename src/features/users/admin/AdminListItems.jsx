import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Avatar } from '@material-ui/core';
import { useProfileStyles } from '../styles';

function AdminListItems(props) {
  const classes = useProfileStyles();

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${props.user.name} ${props.user.surname}`}
          secondary="редактор"
        />
        <ListItemSecondaryAction>
          <IconButton className={classes.btn} edge="end" aria-label="changed">
            <BorderColorIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}

export default AdminListItems;
