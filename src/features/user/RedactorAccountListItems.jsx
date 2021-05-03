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
import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';

import { useProfileStyles } from './Styles';

function RedactorAccountListItems() {
  const classes = useProfileStyles();

  const history = useHistory();

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Заголовок поста" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction>
          <IconButton
            className={classes.btn}
            edge="end"
            aria-label="search"
            onClick={() => history.push('/agency/blog')}
          >
            <SearchIcon />
          </IconButton>
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
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Заголовок поста" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction>
          <IconButton
            className={classes.btn}
            edge="end"
            aria-label="search"
            onClick={() => history.push('/agency/blog')}
          >
            <SearchIcon />
          </IconButton>
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
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Заголовок поста" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction>
          <IconButton
            className={classes.btn}
            edge="end"
            aria-label="search"
            onClick={() => history.push('/agency/blog')}
          >
            <SearchIcon />
          </IconButton>
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

export default RedactorAccountListItems;
