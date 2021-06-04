import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await api.get('/tasks');

  return response.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: {
      failed: false,
      message: null,
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.loading = true;
    },

    [fetchTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },

    [fetchTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
    },
  },
});

export default tasksSlice;
