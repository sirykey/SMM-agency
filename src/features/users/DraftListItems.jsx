import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { Avatar, Tooltip } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import DraftsIcon from '@material-ui/icons/Drafts';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DeleteDraft from './DeleteDraft';
import ChangePostDialog from './ChangePostDialog';
import { useProfileStyles } from './styles';
import EditDraft from '../content/drafts/EditDraft';

function DraftListItems(props) {
  const classes = useProfileStyles();

  const history = useHistory();
  const [openChange, setOpenChange] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleChangeOpen = () => {
    setOpenChange(true);
  };

  const handleChangeClose = () => {
    setOpenChange(false);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <ListItem
        button
        onClick={() => history.push(`/agency/blog/${props.draft._id}`)}
      >
        <ListItemAvatar>
          <Avatar>
            <DraftsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.draft.title}
          secondary={`${props.draft.author.name} ${props.draft.author.surname}`}
        />
        <ListItemSecondaryAction>
          <Tooltip title="Изменить черновик">
            <EditDraft
              title={props.draft.title}
              text={props.draft.text}
              id={props.draft._id}
            />
          </Tooltip>
          <Tooltip title="Переместить черновик в посты">
            <IconButton
              className={classes.btn}
              color="primary"
              edge="end"
              aria-label="search"
              onClick={handleChangeOpen}
            >
              <PostAddIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить черновик">
            <IconButton
              edge="end"
              aria-label="delete"
              color="secondary"
              onClick={handleDeleteOpen}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ChangePostDialog
        open={openChange}
        handleClose={handleChangeClose}
        handleChange={props.handleChange}
        id={props.draft._id}
      />
      <DeleteDraft
        open={openDelete}
        handleClose={handleDeleteClose}
        id={props.draft._id}
        draft={props.draft.draft}
      />
    </>
  );
}

export default DraftListItems;
