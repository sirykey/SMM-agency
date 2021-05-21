import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import DeleteDraft from '../DeleteDraft';

import { useProfileStyles } from '../styles';
import EditPost from '../../content/EditPost';

function RedactorListItems(props) {
  const classes = useProfileStyles();

  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem button onClick={() => history.push(`/agency/blog/${props.post._id}`)}
      >
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.post.title}
          secondary={`${props.post.author.name} ${props.post.author.surname}`}
        />
        <ListItemSecondaryAction>
          <EditPost
            title={props.post.title}
            text={props.post.text}
            id={props.post._id}
          />
          <IconButton
            edge="end"
            aria-label="delete"
            color="secondary"
            onClick={handleClickOpen}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <DeleteDraft
        open={open}
        handleClose={handleClose}
        handleDelete={props.handleDelete}
        id={props.post._id}
        draft={props.post.draft}
      />
    </>
  );
}

export default RedactorListItems;
