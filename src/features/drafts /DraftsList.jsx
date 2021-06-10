import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrafts } from './draftsSlice';
import DraftItem from './DraftItem';
import { Container, Grid, List, Paper, Typography } from '@material-ui/core';
import PageTitle from '../../common /PageTitle';
import { useDraftStyles } from './styles';

function DraftsList() {
  const dispatch = useDispatch();
  const drafts = useSelector((state) => state.draftsSlice.drafts);
  const classes = useDraftStyles();

  useEffect(() => {
    dispatch(fetchDrafts());
  }, [dispatch]);

  return (
    <>
    <Container className={classes.mainGrid}>
      <Grid item xs={12}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          <PageTitle />
        </Typography>
        <Paper className={classes.paper}>
             <List className={classes.list}>
            {drafts.map((draft) => {
              return <DraftItem draft={draft} />;
            })}
             </List>
        </Paper>
      </Grid>
    </Container>
    </>
  );
}

export default DraftsList;
