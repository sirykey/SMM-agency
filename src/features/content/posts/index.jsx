import React from 'react';
import { usePostsStyles } from '../../users/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchHeaders } from '../contentSlice';

function Posts() {
  const classes = usePostsStyles();
  const posts = useSelector((state) => state.contentSlice.items);
  const dispatch = useDispatch;

  dispatch(fetchHeaders())

  const filteredPosts = posts.filter(post => {
    return !post.draft
  })

  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <Grid container spacing={4}>
        {filteredPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Grid>
    </Container>
  );
}

export default Posts;
