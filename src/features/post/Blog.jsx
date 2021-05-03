import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  title: {
    width: '100%',
    paddingBottom: theme.spacing(3)
  },
}));

function Blog() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
          <Grid container spacing={4}>
            <Typography variant="h3" align="center" className={classes.title}>
              Заголовок поста
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at possimus velit vitae facere praesentium incidunt nam obcaecati dignissimos! Tempore laborum ullam, aliquam tenetur iusto doloremque? Necessitatibus odit tempore dicta!
            </Typography>
          </Grid>
      </Container>
  )
}

export default Blog;
