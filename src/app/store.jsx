import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import headersSlice from '../features/headers/headersSlice';
import adminSlice from '../features/adminPage/adminSlice';

export const store = configureStore({
  reducer: {
    authSlice,
    headersSlice,
    adminSlice,
  },
});
