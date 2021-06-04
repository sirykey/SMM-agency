import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListItemText } from '@material-ui/core';

function DraftsTitle({ title, name, surname }) {
  return (
    <Grid container>
      <Grid item xs>
        <ListItemText primary={`${name} ${surname}`} />
      </Grid>
      <Grid item xs>
        <ListItemText primary={title} />
      </Grid>
    </Grid>
  );
}

DraftsTitle.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
};

export default DraftsTitle;
