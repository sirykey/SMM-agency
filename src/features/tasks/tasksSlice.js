import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await api.get('/tasks');

  return response.data;
});

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ message, id }) => {
    const response = await api.post(`/users/${id}/tasks`, {
      message: message,
    });

    return response.data;
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/tasks/${id}`);

      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    adding: false,
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

    [addTask.pending]: (state) => {
      state.adding = true;
    },

    [addTask.fulfilled]: (state, action) => {
      state.adding = false;
      state.tasks.push({
        message: action.meta.arg.message,
      });
    },

    [addTask.rejected]: (state, action) => {
      state.adding = false;
      state.error.message = action.payload;
    },

    [deleteTask.pending]: (state) => {
      state.deleting = true;
    },

    [deleteTask.fulfilled]: (state, action) => {
      state.deleting = false;
      state.tasks = state.tasks.filter((task) => {
        return task._id !== action.meta.arg;
      });
    },

    [deleteTask.rejected]: (state, action) => {
      state.error.message = action.payload;
      state.error.failed = true;
      state.deleting = false;
    },
  },
});

export default tasksSlice.reducer;
