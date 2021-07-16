import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Redactor from './Redactor';
import { useDraftStyles } from '../drafts /styles';
import AddIcon from '@material-ui/icons/Add';
import {
  Button,
  Container,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { fetchRedactors } from './redactorsSlice';
import AddRedactor from './AddRedactor';
import AddTask from '../tasks/AddTask';

function RedactorsList(props) {
  const classes = useDraftStyles();
  const redactors = useSelector((state) => state.redactorsSlice.users);
  const role = useSelector((state) => state.authSlice.role);
  const filteredRedactors = redactors.filter(
    (redactor) => redactor.role === 'USER',
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRedactors());
  }, [dispatch]);
  return (
    <>
      <Container className={classes.mainGrid}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Редакторы:
            </Typography>
            <List className={classes.list}>
              {filteredRedactors.map((user) => (
                <Redactor key={redactors.id} user={user} />
              ))}
            </List>
          </Paper>
          <Grid container className={classes.containerForButtons}>
            <Grid item>
              <AddRedactor />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RedactorsList;
