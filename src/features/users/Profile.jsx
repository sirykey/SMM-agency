import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDraft, changeDraft } from '../content/contentSlice';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useProfileStyles } from './styles';
import UserInfo from './UserInfo';
import AccountList from './AccountList';
import DraftList from './DraftList';

function Profile() {
  const classes = useProfileStyles();

  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.authSlice);
  const posts = useSelector((state) => state.contentSlice.items);
  const users = useSelector((state) => state.usersSlice.users);

  const filteredAdmin = users.filter((user) => user._id !== authUser.id);
  const filteredPosts = posts.filter(
    (post) => post.author._id === authUser.id && post.draft === false,
  );
  const filteredDrafts = posts.filter(
    (post) => post.author._id === authUser.id && post.draft === true,
  );

  const handleDelete = (id) => {
    dispatch(deleteDraft(id));
  };

  const handleChange = (id) => {
    dispatch(changeDraft(id));
  };

  return (
    <Container maxWidth="lg" className={classes.cardGrid}>
      <UserInfo authUser={authUser} />
      <Grid item xs={12}>
        <AccountList
          filteredAdmin={filteredAdmin}
          filteredPosts={filteredPosts}
          authUser={authUser}
          handleDelete={handleDelete}
        />
        {filteredDrafts.length === 0 ? (
          ''
        ) : (
          <DraftList 
            filteredDrafts={filteredDrafts}
            handleDelete={handleDelete}
            handleChange={handleChange}  
          />
        )}
      </Grid>
    </Container>
  );
}

export default Profile;
