import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (id, { rejectedWithValue }) => {
    try {
      const response = await api.get(`posts/${id}/comments`);

      return response.data;
    } catch (e) {
      return rejectedWithValue(e.message);
    }
  },
);
const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {},
    loading: false,
    error: {
      failed: false,
      message: null,
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.loading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    [fetchComments.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
    },
  },
});

export default commentsSlice.reducer;
