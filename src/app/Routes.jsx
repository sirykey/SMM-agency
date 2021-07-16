import React from 'react';
import { Route } from 'react-router';
import DraftsList from '../features/drafts /DraftsList';
import EditDrafts from '../features/drafts /EditDrafts';
import AddDrafts from '../features/drafts /AddDrafts';
import Profile from '../common /Profile';

function Routes() {
  return (
    <>
      <Route exact path="/agency" component={DraftsList} />
      <Route path="/agency/blog/:id?" component={EditDrafts} />
      <Route path="/agency/addPost" component={AddDrafts} />
      <Route path="/agency/profile" component={Profile} />
    </>
  );
}

export default Routes;
