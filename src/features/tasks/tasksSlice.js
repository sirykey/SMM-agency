import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchOneWorkerTasks = createAsyncThunk(
  'tasks/fetchOneWorkerTasks',
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

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ message, id }) => {
    const response = await api.post(`/users/${id}/tasks`, {
      message: message,
    });

    return response.data;
  },
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ message, id }, thunkAPI) => {
    try {
      await api.patch(`/tasks/${id}`, { message });

      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const changeTaskCompleted = createAsyncThunk(
  'tasks/changeTaskCompleted',
  async ({completed, userId, id}, {rejectWithValue}) => {
     try {
       await api.patch(`users/${userId}/tasks/${id}`, {
         completed: !completed,
       })
       return id;
     } catch (e) {
       return rejectWithValue(e.message)
     }
  }
)

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
    loading: false,
    loadingOneWorkerTasks: false,
    error: {
      failed: false,
      error: null,
    },
    adding: false,
    editing: false,
    deleting: false,
    changing: false,
  },

  extraReducers: {
    [fetchOneWorkerTasks.pending]: (state) => {
      state.loadingOneWorkerTasks = true;
    },

    [fetchOneWorkerTasks.fulfilled]: (state, action) => {
      state.loadingOneWorkerTasks = false;
      state.tasks = action.payload;
    },

    [fetchOneWorkerTasks.rejected]: (state, action) => {
      state.loadingOneWorkerTasks = false;
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

    [editTask.pending]: (state) => {
      state.editing = true;
    },

    [editTask.fulfilled]: (state, action) => {
      state.editing = false;
      const checkId = state.tasks.findIndex((task) => {
        return task._id === action.payload;
      });
      state.tasks[checkId].message = action.meta.arg.message;
    },

    [editTask.rejected]: (state, action) => {
      state.editing = false;
      state.error.message = action.payload;
      state.error.failed = true;
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

    [changeTaskCompleted.pending]: (state, action) => {
      state.changing = true
      // const taskId = state.tasks.findIndex((task) => {
      //   return task._id = action.payload;
      // });
      //
      // state.tasks[taskId].changing = true;
    },

    [changeTaskCompleted.fulfilled]: (state, action) => {
      state.changing = false;
      const checkIndex = state.tasks.findIndex((task) => {
        return task._id === action.payload;
      });
      state.tasks[checkIndex].completed = !state.tasks[checkIndex].completed;
    },

    [changeTaskCompleted.rejected]: (state, action) => {
      state.changing = false;
      state.error.message = action.payload;
    }
  },
});

export default tasksSlice.reducer;
