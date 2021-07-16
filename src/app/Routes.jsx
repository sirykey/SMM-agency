import React from 'react';
import { Route } from 'react-router';
import DraftsList from '../features/drafts /DraftsList';
import EditDrafts from '../features/drafts /EditDrafts';
import AddDrafts from '../features/drafts /AddDrafts';
import Profile from '../common /Profile';
import TasksList from '../features/tasks/TasksList';
import RedactorsList from '../features/redactors/RedactorsList';
import CommentsList from '../features/comments/CommentsList';

function Routes() {
  return (
    <>
      <Route exact path="/agency" component={DraftsList} />
      <Route path="/agency/blog/:id?" component={EditDrafts} />
      <Route path="/agency/addPost" component={AddDrafts} />
      <Route path="/agency/profile" component={Profile} />
      <Route path="/agency/tasks" component={TasksList}/>
      <Route path="/agency/redactors" component={RedactorsList}/>
      <Route path="/agency/comments" component={CommentsList}/>
    </>
  );
}

export default Routes;
