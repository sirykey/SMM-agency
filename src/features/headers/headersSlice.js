import { api } from '../../app/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHeaders = createAsyncThunk('headers/fetchHeaders',
  async ({ rejectWithValue }) => {
    try {
      const response = await api.get('/posts', {
      })

      if(response.data.status === "success") {
        return response.data;
      } else {
        return rejectWithValue(response.data)
      }

    }
    catch (e) {
      return rejectWithValue(e.message);
    }
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
      state.error.failed = false
      state.error.message = null;
    },

    [fetchHeaders.fulfilled]: (state, action) => {
      state.items = action.payload.items;
      state.loading = false;
    },

    [fetchHeaders.rejected]: (state, action) => {
      state.error.message = action.payload.message;
      state.error.failed = true;
    }
  }
})

export default headerSlice.reducer;