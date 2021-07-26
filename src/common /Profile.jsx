import React from 'react';
import {
  Container,
  Grid,
  Paper,
  TextField,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useProfileStyles } from './styles';
import ProfileAvatar from './ProfileAvatar';

function Profile() {
  const name = useSelector((state) => state.authSlice.name);
  const surname = useSelector((state) => state.authSlice.surname);
  const mail = useSelector((state) => state.authSlice.mail);
  const role = useSelector((state) => state.authSlice.role);
  const classes = useProfileStyles();

  return (
    <Container fixed className={classes.root}>
      <Grid
        container
        spacing={10}
        justify="center"
        className={classes.formContainer}
      >
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Grid container spacing={3} justify="center" direction="row">
              <Grid item xs={5}>
                <TextField
                  value={name}
                  variant="outlined"
                  label="Имя"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  value={surname}
                  variant="outlined"
                  label="Фамилия"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  value={role === 'ADMIN' ? 'Администратор' : 'Редактор'}
                  variant="outlined"
                  label="Должность"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  value={mail}
                  variant="outlined"
                  label="Почта"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  value="Чеченская Республика"
                  variant="outlined"
                  label="Регион"
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  value="Грозный"
                  variant="outlined"
                  label="Город"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Grid container justify="center" alignItems="center">
              <Grid item justify="center" className={classes.gridForAvatar}>
                <ProfileAvatar />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
