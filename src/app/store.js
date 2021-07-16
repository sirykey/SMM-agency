import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import draftsSlice from '../features/drafts /draftsSlice';
import tasksSlice from '../features/tasks/tasksSlice';
import commentsSlice from '../features/comments/commentsSlice';
import redactorsSlice from '../features/redactors/redactorsSlice';


const initialAuthSlice =
  localStorage.getItem('smm-token-slice') !== null
    ? JSON.parse(localStorage.getItem('smm-token-slice'))
    : undefined;

export const store = configureStore({
  reducer: {
    authSlice,
    draftsSlice,
    tasksSlice,
    commentsSlice,
    redactorsSlice,

  },

  preloadedState: {
    authSlice: initialAuthSlice,
  },
});

let prevState = store.getState();

store.subscribe(() => {
  const state = store.getState();

  if (state.authSlice.token !== prevState.authSlice.token) {
    localStorage.setItem('smm-token-slice', JSON.stringify(state.authSlice));
  }

  prevState = state;
});
