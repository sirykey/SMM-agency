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
export const addComments = createAsyncThunk(
  'comments/addComments',
  async ({ message, id }, { rejectWithValue }) => {
    try {
      const response = await api.post(`posts/${id}/comments`, {
        message,
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const deleteComment = createAsyncThunk(
  'comments/editComments',
  async ({ commentId, id }, { rejectedWithValue }) => {
    try {
      await api.delete(`posts/${id}/comments/${commentId}`);
      return commentId;
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
      state.comments = action.payload;
      state.loading = false;
    },
    [fetchComments.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
    },
    [addComments.pending]: (state) => {
      state.adding = true;
    },

    [addComments.fulfilled]: (state, action) => {
      state.comments.push({
        message: action.meta.arg.message,
      });
      state.adding = false;
    },

    [addComments.rejected]: (state, action) => {
      state.adding = false;
      state.error.message = action.payload;
    },
    [deleteComment.pending]: (state) => {
      state.deleting = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.deleting = false;
      state.comments = state.comments.filter((item) => {
        return item.id !== action.meta.arg;
      });
    },
    [deleteComment.rejected]: (state) => {
      state.deleting = false;
    },
  },
});

export default commentsSlice.reducer;
