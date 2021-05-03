import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Avatar, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useProfileStyles } from './Styles';
import List from '@material-ui/core/List';
import AdminAccountListItems from './AdminAccountListItems';
import RedactorAccountListItems from './RedactorAccountListItems';
import ListTitle from './ListTitle';

function Profile() {
  const classes = useProfileStyles();

  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item item xs={4}>
          <Avatar className={classes.avatar}></Avatar>
        </Grid>
        <Grid item item xs={8}>
          <Typography variant="h2" align="center">
            {/* Директор */}
            Редактор
          </Typography>
        </Grid>
        <Grid item item xs={8}>
          <Typography variant="h4" align="right">
            Асиева Милана
          </Typography>
        </Grid>
        <Grid item item xs={3}>
          <Typography align="center">milanasieva@mail.ru</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <ListTitle>Список постов:</ListTitle>
          <List>
            {/* <AdminAccountListItems /> */}
            <RedactorAccountListItems />
          </List>
        </Paper>
      </Grid>
    </Container>
  );
}

export default Profile;
