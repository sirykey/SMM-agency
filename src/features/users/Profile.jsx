import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { Avatar, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useProfileStyles } from './styles';
import List from '@material-ui/core/List';
import AdminListItems from './admin/AdminListItems';
import RedactorListItems from './redactor/RedactorListItems';
import ListTitle from './ListTitle';
import PostAddIcon from '@material-ui/icons/PostAdd';

function Profile() {
  const classes = useProfileStyles();
  const authUser = useSelector((state) => state.authSlice);
  const posts = useSelector((state) => state.contentSlice.items);
  const users = useSelector((state) => state.usersSlice.users);
  const filteredAdmin = users.filter((user) => user._id !== authUser.id);
  const filteredPosts = users.filter((post) => post.author._id === authUser.id);

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
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <ListTitle>
            {authUser.role === 'ADMIN'
              ? 'Список редакторов:'
              : 'Список постов:'}
          </ListTitle>
          <List>
            {authUser.role === 'ADMIN'
              ? filteredAdmin.map((user) => (
                  <AdminListItems key={user._id} user={user} />
                ))
              : filteredPosts.map((post) => (
                  <RedactorListItems key={post._id} post={post} />
                ))}
          </List>
          <Avatar>
            <PostAddIcon />
          </Avatar>
        </Paper>
      </Grid>
    </Container>
  );
}

export default Profile;
