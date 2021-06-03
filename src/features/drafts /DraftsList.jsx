import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrafts } from './draftsSlice';
import DraftItem from './DraftItem';
import { Container, Grid, List, Paper } from '@material-ui/core';

function DraftsList() {
  const dispatch = useDispatch();
  const drafts = useSelector((state) => state.draftsSlice.drafts);

  useEffect(() => {
    dispatch(fetchDrafts());
  }, [dispatch]);

  return (
    <Container>
      <Grid item xs={12}>
        <Paper>
          <List>
            {drafts.map((draft) => {
              return <DraftItem draft={draft} />;
            })}
          </List>
        </Paper>
      </Grid>
    </Container>
  );
}

export default DraftsList;
