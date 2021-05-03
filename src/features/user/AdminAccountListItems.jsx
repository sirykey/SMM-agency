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
import { useProfileStyles } from './Styles';

function AdminAccountListItems() {
  const classes = useProfileStyles();

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Мухаммад Тимуркаев" secondary="редактор" />
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
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Мухаммад Тимуркаев" secondary="редактор" />
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
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Мухаммад Тимуркаев" secondary="редактор" />
        <ListItemSecondaryAction>
          <IconButton className={classes.btn} edge="end" aria-label="changed">
            <BorderColorIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}

export default AdminAccountListItems;
