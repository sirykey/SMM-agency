import { api } from '../../app/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHeaders = createAsyncThunk('headers/fetchHeaders',
  async () => {

      const response = await api.get('/posts')
      return response.data
  })

const headerSlice = createSlice({
  name: "headers",
  initialState: {
    items: [],
    loading: false,
    error: {
      failed: false,
      message: null
    },
  },

  extraReducers: {
    [fetchHeaders.pending]: (state) => {
      state.loading = true
    },

    [fetchHeaders.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    [fetchHeaders.rejected]: (state, action) => {
      state.error.message = action.payload;
      state.error.failed = true;
    }
  }
})

export default headerSlice.reducer;