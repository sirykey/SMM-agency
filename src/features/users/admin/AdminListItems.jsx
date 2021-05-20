import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../usersSlice';
import DeleteUser from '../DeleteUser';

function AdminListItems(props) {
  const classes = useProfileStyles();
  const [open, setOpen] = useState(false);

  const handleDeleteAlertOpen = () => {
    setOpen(true);
  };
  const handleDeleteAlertClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={${props.user.name} ${props.user.surname}}
          secondary="редактор"
        />
        <ListItemSecondaryAction>
          <IconButton className={classes.btn} edge="end" aria-label="changed">
            <BorderColorIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleDeleteAlertOpen}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <DeleteUser
        open={open}
        handleClose={handleDeleteAlertClose}
        id={props.user._id}
      />
    </div>
  );
}

export default AdminListItems;