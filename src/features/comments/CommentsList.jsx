import React, { useEffect } from 'react';
import { List, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CommentsItem from './CommentsItem';
import { fetchComments } from './commentsSlice';
import { useCommentsStyles } from '../../app/styles';

function CommentsList() {
  const comms = useSelector((state) => state.commentsSlice.comments);
  const dispatch = useDispatch();
  const classes = useCommentsStyles();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  return (
    <div>
      <Paper className={classes.paper}>
        {comms.data !== undefined ?
          <List className={classes.list}>
            {comms.map((comment) => {
              return <CommentsItem comment={comment} />;
            })}
          </List> : ''
        }

      </Paper>
    </div>
  );
}

export default CommentsList;
