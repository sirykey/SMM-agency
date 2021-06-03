import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchDrafts = createAsyncThunk('drafts/fetchDrafts', async () => {
  const response = await api.get('/posts');
  return response.data;
});

export const deleteDraft = createAsyncThunk(
  'drafts/deleteDrafts',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/posts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const draftsSlice = createSlice({
  name: 'drafts',
  initialState: {
    drafts: [],
    loading: false,
    adding: false,
    deleting: false,
    editing: false,
    error: {
      failed: false,
      message: null,
    },
  },

  extraReducers: {
    [fetchDrafts.pending]: (state) => {
      state.loading = true;
      state.error.failed = false;
    },

    [fetchDrafts.fulfilled]: (state, action) => {
      state.loading = false;
      state.drafts = action.payload;
    },

    [fetchDrafts.rejected]: (state, action) => {
      state.loading = false;
      state.error.failed = true;
      state.error.message = action.payload;
    },

    [deleteDraft.pending]: (state) => {
      state.deleting = true;
      state.error.failed = false;
    },

    [deleteDraft.fulfilled]: (state, action) => {
      state.deleting = false;
      state.drafts = state.items.drafts((draft) => {
        return draft._id !== action.payload;
      });
    },

    [deleteDraft.rejected]: (state, action) => {
      state.deleting = false;
      state.error.failed = true;
      state.error.message = action.payload;
    },
  },
});

export default draftsSlice.reducer;
