import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchOneWorkerTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (id) => {
    const response = await api.get(`/users/${id}/tasks`);

    return response.data;
  },
);

export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async () => {
    const response = await api.get('/tasks');

    return response.data;
  },
);

export const addTasks = createAsyncThunk(
  'tasks/addTasks',
  async ({ message, id }) => {
    const response = await api.post(`/users/${id}/tasks`, {
      message: message,
    });

    console.log(response);

    return response.data;
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: {
      failed: false,
      error: null,
    },
    adding: false,
  },

  extraReducers: {
    [fetchOneWorkerTasks.pending]: (state) => {
      state.loading = true;
    },

    [fetchOneWorkerTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },

    [fetchOneWorkerTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
    },

    [fetchAllTasks.pending]: (state) => {
      state.loading = true;
    },

    [fetchAllTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },

    [fetchAllTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
    },

    [addTasks.pending]: (state) => {
      state.adding = true;
    },

    [addTasks.fulfilled]: (state, action) => {
      state.adding = false;
      state.tasks.push({
        message: action.meta.arg.message,
      });
    },

    [addTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
    },
  },
});

export default tasksSlice.reducer;
