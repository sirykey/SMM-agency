import { configureStore } from '@reduxjs/toolkit';
import application from '../features/application/application';
import AuthSlice from '../features/auth/authSlice';

export const store = configureStore({
  reducer: AuthSlice,
});
