import React from 'react';
import { useDraftsStyles } from '../../users/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Draft from './Draft';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaders } from '../contentSlice';



function Drafts() {
  const classes = useDraftsStyles();
  const posts = useSelector((state) => state.contentSlice.items);
  const dispatch = useDispatch;

  dispatch(fetchHeaders())
  const filteredPosts = posts.filter(post => {
    return post.draft
  })
  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <Grid container spacing={4}>
        {filteredPosts.map((post) => (
          <Draft key={post._id} post={post} />
        ))}
      </Grid>
    </Container>
  );
}

export default Drafts;