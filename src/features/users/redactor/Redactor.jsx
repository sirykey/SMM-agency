import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRedactorsStyles } from '../styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

function Redactor({ data }) {
  const history = useHistory();
  const classes = useRedactorsStyles();
  return (
    <Grid item key={data.key} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name} {data.surname}
          </Typography>
          <Typography>редактор</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => history.push(`/agency/posts/${data._id}`)}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Redactor;
