import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useProfileStyles } from './styles';
import List from '@material-ui/core/List';
import DraftListItems from './DraftListItems';
import ListTitle from './ListTitle';

function DraftList(props) {
  const classes = useProfileStyles();

  return (
    <Paper className={classes.paper}>
      <ListTitle>Список черновиков</ListTitle>
      <List className={classes.list}>
        {props.filteredDrafts.map((draft) => (
          <DraftListItems
            handleChange={props.handleChange}
            handleDelete={props.handleDelete}
            key={draft._id}
            draft={draft}
          />
        ))}
      </List>
    </Paper>
  );
}

export default DraftList;
