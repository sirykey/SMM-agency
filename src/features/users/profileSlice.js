import { api } from '../../app/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const changedDraft = createAsyncThunk(
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
  'headers/deleteDraft',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/posts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const profileSlice = createSlice({
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
    [changedDraft.pending]: (state, action) => {
      const postID = state.items.findIndex((item) => {
        return action.meta.arg === item._id;
      });

      // state.items[postID].changed = true;
    },

    [changedDraft.fulfilled]: (state, action) => {
      const postID = state.items.findIndex((item) => {
        return action.payload === item._id;
      });

      // state.items[postID].changed = false;
      state.items[postID].draft = true;
    },

    [changedDraft.rejected]: (state, action) => {
      const postID = state.items.findIndex((item) => {
        return action.payload === item._id;
      });

      // state.items[postID].changed = false;
      state.error.message = action.payload;
      state.error.failed = true;
    },

    [deleteDraft.pending]: (state, action) => {
      const index = state.items.findIndex((item) => {
        return action.meta.arg === item._id;
      });

      // state.items[index].deleting = true;
    },

    [deleteDraft.fulfilled]: (state, action) => {
      const index = state.items.findIndex((item) => {
        return action.payload === item._id;
      });

      // state.items[index].deleting = false;

      state.items = state.items.filter((item) => {
        return item._id !== action.meta.arg;
      });
    },

    [deleteDraft.rejected]: (state, action) => {
      const index = state.items.findIndex((item) => {
        return action.payload === item._id;
      });

      // state.items[index].deleting = false;
      state.error.message = action.payload;
      state.error.failed = true;
    },
  },
});

export default profileSlice.reducer;
