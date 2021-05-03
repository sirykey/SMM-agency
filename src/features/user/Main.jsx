import React from 'react';
import { useMainStyles } from './Styles';
import Posts from '../post/Posts';
import Redactors from './Redactors';
import Drafts from '../post/Drafts';
import Blog from '../post/Blog';
import Profile from './Profile';
import SignUp from './signUp';
import { Route } from 'react-router';

function Main() {
  const classes = useMainStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Route exact path="/agency" component={Profile} />
      <Route path="/agency/redactors" component={Redactors} />
      <Route path="/agency/posts" component={Posts} />
      <Route path="/agency/drafts" component={Drafts} />
      <Route path="/agency/signup" component={SignUp} />
      <Route path="/agency/blog" component={Blog} />
    </main>
  );
}

export default Main;
