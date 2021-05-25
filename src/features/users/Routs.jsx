import React from 'react';
import { Route } from 'react-router';
import { useMainStyles } from './styles';
import SignUp from './admin/SignUp';
import Redactors from './redactor/Redactors';
import Posts from '../content/posts';
import Drafts from '../content/drafts';
import Blog from '../content';
import Profile from './Profile';
import AddPost from '../content/AddPost';

function Routs(props) {
  const classes = useMainStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Route exact path="/agency" component={Profile} />
      <Route path="/agency/redactors" component={Redactors} />
      <Route path="/agency/posts/:id?" component={Posts} />
      <Route path="/agency/drafts" component={Drafts} />
      <Route path="/agency/signup" component={SignUp} />
      <Route path="/agency/blog/:id?" component={Blog} />
      <Route path="/agency/addPost" component={AddPost} />
    </main>
  );
}

export default Routs;
