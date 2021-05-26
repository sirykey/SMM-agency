import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useBlogStyles } from '../users/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Comments from './comments';

function Blog() {
  const classes = useBlogStyles();
  const params = useParams().id;
  const posts = useSelector((state) => state.contentSlice.items);

  const filteredPosts = posts.find((post) => {
    return post._id === params;
  });

  if (filteredPosts === undefined) {
    return '';
  }

  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <Grid
        container
        wrap="nowrap"
        spacing={2}
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Typography variant="h3" align="center" className={classes.title}>
          {filteredPosts.title}
        </Typography>
        <Paper className={classes.paper}>
          <Typography>{filteredPosts.text}</Typography>
        </Paper>
      </Grid>
      <Comments id={filteredPosts._id} />
    </Container>
  );
}

export default Blog;
