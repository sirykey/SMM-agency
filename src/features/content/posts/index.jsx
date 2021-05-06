import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import Post from './post';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Posts() {
  const classes = useStyles();
  const posts = useSelector(state => state.headersSlice.items)

  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <Grid container spacing={4}>
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </Grid>
    </Container>
  );
}

export default Posts;
