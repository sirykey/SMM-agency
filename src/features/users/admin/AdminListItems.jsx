import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';
import { Avatar, Tooltip } from '@material-ui/core';
import { useProfileStyles } from '../styles';
import DeleteUser from '../DeleteUser';
import { useHistory } from 'react-router';
import AddTask from '../../tasks/AddTask';

function AdminListItems(props) {
  const classes = useProfileStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const handleDeleteAlertOpen = () => {
    setOpen(true);
  };
  const handleDeleteAlertClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem button>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${props.user.name} ${props.user.surname}`}
          secondary="редактор"
          onClick={() => history.push(`/agency/posts/${props.user._id}`)}
        />
        <ListItemSecondaryAction>
          <AddTask id={props.user._id} />
          <IconButton
            color="primary"
            className={classes.btn}
            edge="end"
            aria-label="changed"
          >
            <EditIcon />
          </IconButton>
          <Tooltip title="Удалить пользователя">
            <IconButton
              color="secondary"
              edge="end"
              aria-label="delete"
              onClick={handleDeleteAlertOpen}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
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
