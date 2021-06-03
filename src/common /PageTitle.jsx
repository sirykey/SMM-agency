import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListItemText } from '@material-ui/core';

function PageTitle({ title, name, surname }) {
  return (
    <>
      <Grid item xs={4}>
        <ListItemText primary={`${name} ${surname}`} />
      </Grid>
      <Grid item xs={9}>
        <ListItemText primary={title} />
      </Grid>
    </>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
};

export default PageTitle;
