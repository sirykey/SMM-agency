import React from 'react';
import { useCommonStyles } from './styles';

function PageTitle() {
  const classes = useCommonStyles();

  return <h1 className={classes.title}>Черновики:</h1>;
}

export default PageTitle;
