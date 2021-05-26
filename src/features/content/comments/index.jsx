import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';
import ListTitle from '../../users/ListTitle';
import List from '@material-ui/core/List';
import { ListItem, ListItemAvatar, Paper, Tooltip } from '@material-ui/core';

import { useProfileStyles } from '../../users/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import AddComment from './AddComment';
import { fetchComments } from './commentsSlice';

function Comments(props) {
  const comms = useSelector((state) => state.commentsSlice.items);
  const classes = useProfileStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(props.id));
  }, []);

  return (
    <div>
      <Paper className={classes.paper}>
        <ListTitle>Комментарии:</ListTitle>
        <List className={classes.list}>
          {comms.map((comment) => {
            return <Comment comment={comment} id={props.id} />;
          })}
        </List>
        <AddComment id={props.id} />
      </Paper>
    </div>
  );
}

export default Comments;
