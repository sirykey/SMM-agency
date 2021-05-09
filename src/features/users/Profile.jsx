import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useProfileStyles } from './styles';
import List from '@material-ui/core/List';
import AdminListItems from './admin/AdminListItems';
import RedactorListItems from './redactor/RedactorListItems';
import ListTitle from './ListTitle';
import AddPost from './redactor/AddPost';
import UserInfo from './UserInfo';

function Profile() {
  const classes = useProfileStyles();
  const authUser = useSelector((state) => state.authSlice);
  const posts = useSelector((state) => state.contentSlice.items);
  const users = useSelector((state) => state.usersSlice.users);
  const filteredAdmin = users.filter((user) => user._id !== authUser.id);
  const filteredPosts = posts.filter((post) => post.author._id !== authUser.id);


  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <UserInfo />
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
            
            {authUser.role === 'ADMIN' ? '' 
          : (
            <AddPost />
          )}
          </List>
        </Paper>
      </Grid>
    </Container>
  );
}

export default Profile;
