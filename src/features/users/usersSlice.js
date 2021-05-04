import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';
import { deleteHeader } from '../headers/headersSlice';

export const fetchRegistration = createAsyncThunk(
  'addWorkers/fetchRegistration',
  async ({ username, name, surname, mail, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/users', {
          username: username,
          name: name,
          surname: surname,
          mail: mail,
          password: password,
      });

        return response.data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

export const fetchUsers = createAsyncThunk('users/fetchUsers',
  async () => {
      const response = await api.get('/users')
      return response.data
  });

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (deletingUserId, thunkAPI) => {
    try {
      await api.delete(`/users/${deletingUserId}`);
      return deletingUserId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const registrationSlice = createSlice({
  name: 'addWorkers',
  initialState: {
    loading: false,
    error: {
      failed: false,
      message: null,
    },
    users: [],
  },

  extraReducers: {
    [fetchRegistration.pending]: (state) => {
      state.loading = true;
      state.error.failed = false;
      state.error.message = null;
    },

    [fetchRegistration.fulfilled]: (state, action) => {
      state.loading = false
      state.users.push(
        {
          name: action.meta.arg.name,
          surname: action.meta.arg.surname,
          email: action.meta.arg.email,
          password: action.meta.arg.password,
          username: action.meta.arg.username,
        }
      )
    },

    [fetchRegistration.rejected]: (state, action) => {
      state.error.message = action.payload.message;
      state.error.failed = true;
    },

    [fetchUsers.pending]: (state) => {
      state.loading = true;
      state.error.failed = false;
      state.error.message = null;
    },

    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },

    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
      state.error.failed = true;
    },

    [deleteUsers.pending]: (state, action) => {
      const headerId = state.users.findIndex((user) => {
        return action.meta.arg === user._id;
      });

      state.users[headerId].deleting = true;
    },

    [deleteUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => {
        return user._id !== action.meta.arg;
      });
    },

    [deleteUsers.rejected]: (state, action) => {
      state.error.message = action.payload;
      state.error.failed = true;
    },
  },
});

export default registrationSlice.reducer
