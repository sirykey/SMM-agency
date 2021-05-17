import React from 'react';
import { useRedactorsStyles } from '../styles';
import { Container, Grid } from '@material-ui/core';
import Redactor from './Redactor';
import { useSelector } from 'react-redux';

function Redactors(props) {
  const users = useSelector((state) => state.usersSlice.users);
  const role = useSelector((state) => state.authSlice.role);
  const filteredUsers = users.filter((redactor) => redactor.role === 'USER');
  const classes = useRedactorsStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {filteredUsers.map((card) => (
          <Redactor key={card} data={card} />
        ))}
      </Grid>
    </Container>
  );
}

export default Redactors;
