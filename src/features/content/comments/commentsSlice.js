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
      const response = await api.post(`posts/${id}/comments`, {
        message,
      });

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
    items: [],
    loading: false,
    adding: false,
    deleting: false,
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
    },
  },
  [addComments.pending]: (state) => {
    console.log(1111);
    state.adding = true;
  },

  [addComments.fulfilled]: (state, action) => {
    alert();
    state.adding = false;
    state.items.push({
      message: action.meta.arg.message,
    });
  },

  [addComments.rejected]: (state, action) => {
    alert(2);
    state.adding = false;
    state.error.message = action.payload;
  },
  [deleteComment.pending]: (state) => {
    state.deleting = true;
  },
  [deleteComment.fulfilled]: (state, action) => {
    state.deleting = false;
    state.items = state.items.filter((item) => {
      return item.id !== action.meta.arg;
    });
  },
  [deleteComment.rejected]: (state) => {
    state.deleting = false;
  },
});

export default commentsSlice.reducer;
