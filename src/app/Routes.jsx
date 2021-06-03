import React from 'react';
import { Route } from 'react-router';
import DraftsList from '../features/drafts /DraftsList';

function Routes() {
  return (
    <main>
      <div>
        <Route path="/agency" component={DraftsList} />
      </div>
    </main>
  );
}

export default Routes;
