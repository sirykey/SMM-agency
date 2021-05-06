import React from 'react';
import { useRedactorsStyles } from '../styles';
import { Container, Grid } from '@material-ui/core';
import Redactor from './Redactor';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Redactors(props) {
  const classes = useRedactorsStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Redactor key={card} />
        ))}
      </Grid>
    </Container>
  );
}

export default Redactors;
