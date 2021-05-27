import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useProfileStyles } from './styles';

function UserInfo({ authUser }) {
  const classes = useProfileStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={4}>
        <Avatar className={classes.avatar} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4" align="center">
          {authUser.role === 'ADMIN' ? 'Директор' : 'Редактор'}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h3" align="right">
          {`${authUser.name}  ${authUser.surname}`}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography align="center">{authUser.mail}</Typography>
      </Grid>
    </Grid>
  );
}

export default UserInfo;
