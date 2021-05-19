import React from 'react';
import { usePostsStyles } from '../../users/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import Post from './Post';
import { useParams } from 'react-router';

function Posts() {
  const classes = usePostsStyles();
  const posts = useSelector((state) => state.contentSlice.items);
  const id = useParams().id;

  const filteredPostsID = posts.filter(post => {
    return !post.draft && post.author._id === id;
  })

  const filteredPosts = posts.filter(post => {
    return !post.draft;
  })


  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <Grid container spacing={4}>
        {id ? (
          filteredPostsID.map((post) => (
              <Post key={post._id} post={post} />
            ))
        )  : (
          filteredPosts.map((post) => (
              <Post key={post._id} post={post} />
            ))
        )}
      </Grid>
    </Container>
  );
}

export default Posts;
