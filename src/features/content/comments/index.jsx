import React from 'react';

import { useSelector } from 'react-redux';
import Comment from './Comment';
import ListTitle from '../../users/ListTitle';
import List from '@material-ui/core/List';
import { Paper } from '@material-ui/core';

import { useProfileStyles } from '../../users/styles';
function Comments(props) {
  const comms = useSelector((state) => state.commentsSlice.items);
  const classes = useProfileStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <ListTitle>Комментарии:</ListTitle>
        <List className={classes.list}>
          {comms.map((comment) => {
            return <Comment comment={comment} />;
          })}
        </List>
      </Paper>
    </div>
  );
}

export default Comments;
