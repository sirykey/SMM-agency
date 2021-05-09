import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useProfileStyles } from './styles';


function UserInfo() {
  const classes = useProfileStyles();
  const authUser = useSelector((state) => state.authSlice);

  return (
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
          <Typography variant="h4" align="center">
            {authUser.role === 'ADMIN' ? 'Директор' : 'Редактор'}
          </Typography>
        </Grid>
        <Grid item item xs={8}>
          <Typography variant="h3" align="right">
            {`${authUser.name}  ${authUser.surname}`}
          </Typography>
        </Grid>
        <Grid item item xs={3}>
          <Typography align="center">{authUser.mail}</Typography>
        </Grid>
      </Grid>
  )
}

export default UserInfo;
