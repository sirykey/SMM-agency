import React, { useEffect } from 'react';
import { List, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CommentsItem from './CommentsItem';
import { fetchComments } from './commentsSlice';
import { useCommentsStyles } from '../../app/styles';
import AddComment from './AddComment';

function CommentsList({id}) {
  const comms = useSelector((state) => state.commentsSlice.comments);
  console.log(comms);
  const dispatch = useDispatch();
  const classes = useCommentsStyles();

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography
          component="h2"
          variant="h6"
          color="primary"
          gutterBottom
        >
          Комментарии:
        </Typography>
        {comms.length > 0 ?  <List className={classes.list}>
          {comms.map((comment) => {
            return <CommentsItem comment={comment} id={id} />;
          })}
        </List> : 'Комментариев нет'}

        <AddComment id={id}/>
      </Paper>
    </div>
  );
}

export default CommentsList;
