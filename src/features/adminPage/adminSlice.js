import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

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
  async ({ rejectWithValue }) => {
    try {
      const response = await api.get('/users')
      return response.data
    } catch (e) {
      rejectWithValue(e.message);
    }
  })

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
    }
  },
});

export default registrationSlice.reducer
