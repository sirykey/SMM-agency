import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useProfileStyles } from './styles';
import List from '@material-ui/core/List';
import DraftListItems from './DraftListItems';
import ListTitle from './ListTitle';
import AddPost from '../content/AddPost';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

function DraftList(props) {
  const classes = useProfileStyles();
  const authUser = useSelector((state) => state.authSlice);

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <ListTitle>Список черновиков:</ListTitle>
        <List className={classes.list}>
          {props.filteredDrafts.map((draft) => (
            <DraftListItems key={draft._id} draft={draft} />
          ))}
          {authUser.role === 'ADMIN' ? '' : <AddPost />}
        </List>
      </Paper>
    </Grid>
  );
}

export default DraftList;
