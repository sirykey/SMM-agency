import { api } from '../../app/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchHeaders = createAsyncThunk(
  'headers/fetchHeaders',
  async () => {
    const response = await api.get('/posts');
    return response.data;
  },
);

export const changeDraft = createAsyncThunk(
  'headers/changedDraft',
  async (id, thunkApi) => {
    try {
      await api.patch(`/posts/${id}`, {
        draft: true,
      });
      return id;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  },
);

export const deleteDraft = createAsyncThunk(
  'headers/deleteHeader',
  async (deletingHeaderId, thunkAPI) => {
    try {
      await api.delete(`/posts/${deletingHeaderId}`);
      return deletingHeaderId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addHeader = createAsyncThunk(
  'header/addHeader',
  async ({ title, text }, { rejectWithValue }) => {
    try {
      const response = await api.post('/posts', {
        title: title,
        text: text,
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const headerSlice = createSlice({
  name: 'headers',
  initialState: {
    items: [],
    loading: false,
    error: {
      failed: false,
      message: null,
    },
  },

  extraReducers: {
    [fetchHeaders.pending]: (state) => {
      state.loading = true;
    },

    [fetchHeaders.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    [fetchHeaders.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
      state.error.failed = true;
    },

    [changeDraft.pending]: (state, action) => {
      const postID = state.items.findIndex((item) => {
        return action.meta.arg === item._id;
      });

      // state.items[postID].changed = true;
    },

    [changeDraft.fulfilled]: (state, action) => {
      const postID = state.items.findIndex((item) => {
        return action.payload === item._id;
      });

      // state.items[postID].changed = false;
      state.items[postID].draft = true;
    },

    [changeDraft.rejected]: (state, action) => {
      const postID = state.items.findIndex((item) => {
        return action.payload === item._id;
      });

      // state.items[postID].changed = false;
      state.error.message = action.payload;
      state.error.failed = true;
    },

    [deleteDraft.pending]: (state, action) => {
      const headerId = state.items.findIndex((item) => {
        return action.meta.arg === item._id;
      });

      state.items[headerId].deleting = true;
    },

    [deleteDraft.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = state.items.filter((item) => {
        return item._id !== action.meta.arg;
      });
    },

    [deleteDraft.rejected]: (state, action) => {
      state.error.message = action.payload;
      state.error.failed = true;
    },

    [addHeader.pending]: (state) => {
      state.loading = true;
    },

    [addHeader.fulfilled]: (state, action) => {
      state.items.push({
        text: action.meta.arg.text,
        title: action.meta.arg.title,
      });
      state.loading = false;
    },

    [addHeader.rejected]: (state, action) => {
      state.loading = false;
      state.error.message = action.payload;
      state.error.failed = true;
    },
  },
});

export default headerSlice.reducer;
