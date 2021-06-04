import React from 'react';
import { Container, Grid, TextField, Typography } from '@material-ui/core';
import { useEditDraftStyles } from './styles';

function EditDrafts() {
  const classes = useEditDraftStyles()
  return (
    <Container maxWidth='md' className={classes.cardGrid}>
      <Grid container wrap='nowrap'
            direction="column"
            justify="space-evenly"
            alignItems='flex-start'
>
        <Typography variant='h3' align='center' className={classes.form}>Редактиование</Typography>
        <TextField fullWidth  className={classes.form} type='text' variant='outlined'></TextField>
      </Grid>
    </Container>
  );
}

export default EditDrafts;