import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDraft } from '../content/contentSlice';
import Paper from '@material-ui/core/Paper';
import { useProfileStyles } from './styles';
import List from '@material-ui/core/List';
import DraftListItems from './DraftListItems';
import ListTitle from './ListTitle';

function DraftList(props) {
  const classes = useProfileStyles();

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteDraft(id));
  };

  return (
    <Paper className={classes.paper}>
      <ListTitle>Список черновиков</ListTitle>
      <List className={classes.list}>
        {props.filteredDrafts.map((draft) => (
          <DraftListItems
            handleDelete={handleDelete}
            key={draft._id}
            draft={draft}
          />
        ))}
      </List>
    </Paper>
  );
}

export default DraftList;
