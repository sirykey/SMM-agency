import React from 'react';
import { useDispatch } from 'react-redux';
import { changeDraft } from '../content/contentSlice';
import Paper from '@material-ui/core/Paper';
import { useProfileStyles } from './styles';
import List from '@material-ui/core/List';
import AdminListItems from './admin/AdminListItems';
import RedactorListItems from './redactor/RedactorListItems';
import ListTitle from './ListTitle';
import AddPost from '../content/AddPost';

function AccountList(props) {
  const classes = useProfileStyles();

  return (
    <Paper className={classes.paper}>
      <ListTitle>
        {props.authUser.role === 'ADMIN'
          ? 'Список редакторов:'
          : 'Список постов:'}
      </ListTitle>
      <List className={classes.list}>
        {props.authUser.role === 'ADMIN'
          ? props.filteredAdmin.map((user) => (
              <AdminListItems key={user._id} user={user} />
            ))
          : props.filteredPosts.map((post) => (
              <RedactorListItems
                handleDelete={props.handleDelete}
                key={post._id}
                post={post}
              />
            ))}

        {props.authUser.role === 'ADMIN' ? '' : <AddPost />}
      </List>
    </Paper>
  );
}

export default AccountList;
