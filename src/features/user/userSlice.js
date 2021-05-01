import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchRegistration = createAsyncThunk(
  'addWorkers/fetchRegistration',
  async ({ username, name, surname, email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/users', {
        data: {
          username: username,
          name: name,
          surname: surname,
          email: email,
          password: password,
        },
      });
      if (response.data.status === 'success') {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (e) {
      rejectWithValue(e.message);
    }
  },
);

const registrationSlice = createSlice({
  name: 'addWorkers',
  initialState: {
    loading: false,
    error: {
      failed: false,
      message: null,
    },
    username: null,
    name: null,
    surname: null,
    email: null,
    password: null,
  },

  extraReducers: {
    [fetchRegistration.pending]: (state) => {
      state.loading = true;
      state.error.failed = false;
      state.error.message = null;
    },

    [fetchRegistration.fulfilled]: (state, action) => {
      state.loading = false;
      state.name = state.meta.arg.name;
      state.surname = state.meta.arg.surname;
      state.email = action.meta.arg.email;
      state.password = action.meta.arg.password;
      state.username = action.meta.arg.username;
    },

    [fetchRegistration.rejected]: (state, action) => {
      state.error.message = action.payload.message;
      state.error.failed = true;
    },
  },
});

export default registrationSlice.reducer;
