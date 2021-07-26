import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrafts } from './draftsSlice';
import DraftItem from './DraftItem';
import {
  Button,
  Container,
  Grid,
  List,
  Paper,
  Typography,
} from '@material-ui/core';
import PageTitle from '../../common /PageTitle';
import { useDraftStyles } from './styles';
import { useHistory } from 'react-router';

function DraftsList() {
  const dispatch = useDispatch();
  const drafts = useSelector((state) => state.draftsSlice.drafts);
  const classes = useDraftStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDrafts());
  }, [dispatch]);

  return (
    <>
      <Container className={classes.mainGrid} fixed>
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
          <Grid container className={classes.containerForButtons}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={() => history.push('/agency/addPost')}
              >
                Добавить
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DraftsList;
