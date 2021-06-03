import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await api.get('/users');
  return response.data;
});
