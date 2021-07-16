import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchRedactors = createAsyncThunk('users/fetchUsers', async () => {
  const response = await api.get('/users');
  return response.data;
});

export const deleteRedactor = createAsyncThunk(
  'users/deleteUser',
  async (deletingUserId, thunkAPI) => {
    try {
      await api.delete(`users/${deletingUserId}`);
      return deletingUserId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const signUpRedactor = createAsyncThunk(
  'users/registration',
  async (
    { username, name, surname, mail, password },
    { rejectedWithValue },
  ) => {
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
      rejectedWithValue(e.message);
    }
  },
);

const redactorsSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    adding: false,
    users: [],
    error: {
      failed: false,
      message: null,
    },
  },
  extraReducers: {
    [fetchRedactors.pending]: (state) => {
      state.loading = true;
      state.error.failed = false;
      state.error.message = null;
    },
    [fetchRedactors.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchRedactors.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
      state.error.failed = true;
    },
  },
  [deleteRedactor.pending]: (state, action) => {
    const headerId = state.users.findIndex((user) => {
      return action.meta.arg === user._id;
    });

    state.users[headerId].deleting = true;
  },

  [deleteRedactor.fulfilled]: (state, action) => {
    state.loading = false;
    state.users = state.users.filter((user) => {
      return user._id !== action.meta.arg;
    });
  },

  [deleteRedactor.rejected]: (state, action) => {
    state.error.message = action.payload;
    state.error.failed = true;
  },
  [signUpRedactor.pending]: (state) => {
    state.loading = true;
    state.error.failed = false;
    state.error.message = null;
  },
  [signUpRedactor.fulfilled]: (state, action) => {
    state.loading = false;
    state.users.push({
      name: action.meta.arg.name,
      surname: action.meta.arg.surname,
      mail: action.meta.arg.mail,
      password: action.meta.arg.password,
      username: action.meta.arg.username,
    });
  },
  [signUpRedactor.rejected]: (state, action) => {
    state.error.message = action.payload.message;
    state.error.failed = true;
  },
});

export default redactorsSlice.reducer;
