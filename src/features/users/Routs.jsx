import React from 'react';
import { Route } from 'react-router';
import { useMainStyles } from './styles';
import SignUp from './admin/SignUp';
import Redactors from './redactor/Redactors';

function Routs(props) {
  const classes = useMainStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Route exact path="/agency" component={} />
      <Route path="/agency/redactors" component={Redactors} />
      <Route path="/agency/posts" component={} />
      <Route path="/agency/drafts" component={} />
      <Route path="/agency/signup" component={SignUp} />
      <Route path="/agency/blog" component={} />
    </main>
  );
}

export default Routs;
