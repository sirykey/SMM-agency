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
import SearchIcon from '@material-ui/icons/Search';
import DeleteDraft from './DeleteDraft';

import { useProfileStyles } from './styles';

function DraftListItems(props) {
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
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.draft.title}
          secondary={`${props.draft.author.name} ${props.draft.author.surname}`}
        />
        <ListItemSecondaryAction>
          <IconButton
            className={classes.btn}
            color="primary"
            edge="end"
            aria-label="search"
            onClick={() => history.push('/agency/blog')}
          >
            <SearchIcon />
          </IconButton>
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
        id={props.draft._id}
      />
    </>
  );
}

export default DraftListItems;
