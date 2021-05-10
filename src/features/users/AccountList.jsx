import React from 'react';
import { useDispatch } from 'react-redux';
import { changedDraft } from '../content/contentSlice'; 
import Paper from '@material-ui/core/Paper';
import { useProfileStyles } from './styles';
import List from '@material-ui/core/List';
import AdminListItems from './admin/AdminListItems';
import RedactorListItems from './redactor/RedactorListItems';
import ListTitle from './ListTitle';
import AddPost from './redactor/AddPost';



function AccountList(props) {
  const classes = useProfileStyles();

  const dispatch = useDispatch();

  const handleChange = (id, draft) => {
    dispatch(changedDraft({_id: id, draft: draft}));
  };

  return (
    <Paper className={classes.paper}>
          <ListTitle>
            {props.authUser.role === 'ADMIN'
              ? 'Список редакторов:'
              : 'Список постов:'}
          </ListTitle>
          <List>
            {props.authUser.role === 'ADMIN'
              ? props.filteredAdmin.map((user) => (
                  <AdminListItems key={user._id} user={user} />
                ))
              : props.filteredPosts.map((post) => (
                  <RedactorListItems handleChange={handleChange} key={post._id} post={post} />
                ))}

            {props.authUser.role === 'ADMIN' ? '' : <AddPost />}
          </List>
        </Paper>
  )
}

export default AccountList;
