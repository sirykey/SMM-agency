import { Typography } from '@material-ui/core';
import React from 'react';
import { useBlogStyles } from '../users/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function Blog() {
  const classes = useBlogStyles();
  const params = useParams().id;
  const posts = useSelector((state) => state.contentSlice.items);

  const filteredPosts = posts.find(post => {
    return post._id === params;
  })

  if (filteredPosts === undefined){
    return 'ss'
  }

    return (
      <Container maxWidth="lg" className={classes.cardGrid}>
        <Grid container spacing={4}>
          <Typography variant="h3" align="center" className={classes.title}>
            {filteredPosts.title}
          </Typography>
          <Typography>
            {filteredPosts.text}
          </Typography>
        </Grid>
      </Container>
    );

}

export default Blog;
