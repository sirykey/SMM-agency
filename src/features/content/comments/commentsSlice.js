import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../../app/api';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`posts/${id}/comments`);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const addComments = createAsyncThunk(
  'comments/addComments',
  async ({ message, id }, { rejectWithValue }) => {
    try {
      const response = await api.post(`posts/${id}/comments`);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const editComments = createAsyncThunk(
  'comments/editComments',
  async ({ message, id, postId }, { rejectWithValue }) => {
    try {
      await api.patch(`posts/${postId}/comments/${id}`);

      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const deleteComment = createAsyncThunk(
  'comments/editComments',
  async ({ deletingCommentId, id }, { rejectedWithValue }) => {
    try {
      await api.delete(`post/${deletingCommentId}/comments/${id}`);
      return deletingCommentId;
    } catch (e) {
      return rejectedWithValue(e.message);
    }
  },
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    items: [],
    loading: true,
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
