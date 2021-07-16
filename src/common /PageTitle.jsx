import React from 'react';
import { useAvatarStyles } from './styles';

function PageTitle() {
  const classes = useAvatarStyles();

  return <h1 className={classes.title}>Черновики:</h1>;
}

export default PageTitle;
