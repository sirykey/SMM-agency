import React from 'react';
import { Route } from 'react-router';
import DraftsList from '../features/drafts /DraftsList';
import EditDrafts from '../features/drafts /EditDrafts';

function Routes() {
  return (
      <>
        <Route exact path="/agency" component={DraftsList} />
        <Route path="/agency/blog/:id?" component={EditDrafts} />
      </>
  );
}

export default Routes;
