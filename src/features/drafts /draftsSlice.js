import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchDrafts = createAsyncThunk('drafts/fetchDrafts', async () => {
  const response = await api.get('/posts');
  return response.data;
});

export const fetchOneDraft = createAsyncThunk(
  'drafts/fetchOneDraft',
  async (id) => {
    const response = await api.get(`/posts/${id}`)
    return response.data;
  },
);

export const deleteDraft = createAsyncThunk(
  'drafts/deleteDraft',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/posts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const editDraft = createAsyncThunk(
  'draft/editDraft',
  async ({ title, text, id }, thunkAPI) => {
    try {
      await api.patch(`/posts/${id}`, { title, text });
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addDraft = createAsyncThunk(
  'draft/addDraft',
  async ({ title, text }, thunkAPI) => {
    try {
      await api.post('/posts', {
        title,
        text,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }

    return thunkAPI.getState().authSlice.id;
  },
);

const draftsSlice = createSlice({
  name: 'drafts',
  initialState: {
    drafts: [],
    oneDraft:{},
    loading: false,
    oneDraftLoading: false,
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
      state.drafts = state.drafts.filter((draft) => {
        return draft._id !== action.payload;
      });
    },

    [deleteDraft.rejected]: (state, action) => {
      state.deleting = false;
      state.error.failed = true;
      state.error.message = action.payload;
    },

    [editDraft.pending]: (state) => {
      state.editing = true;
      state.error.failed = false;
    },

    [editDraft.fulfilled]: (state, action) => {
      state.oneDraft.title = action.meta.arg.title;
      state.oneDraft.text = action.meta.arg.text;
      state.editing = false;
    },

    [editDraft.rejected]: (state, action) => {
      state.error.failed = true;
      state.error.message = action.payload;
      state.editing = false;
    },

    [addDraft.pending]: (state) => {
      state.adding = true;
      state.error.failed = false;
    },

    [addDraft.fulfilled]: (state, action) => {
      state.adding = false;
      state.drafts.push({
        text: action.meta.arg.text,
        title: action.meta.arg.title,
        author: action.payload,
      });
    },

    [addDraft.rejected]: (state, action) => {
      state.error.failed = true;
      state.error.message = action.payload;
    },

    [fetchOneDraft.pending]: (state) => {
      state.oneDraftLoading = true;
      state.error.failed = false;
    },

    [fetchOneDraft.fulfilled]: (state, action) => {
      state.oneDraftLoading = false;
      state.oneDraft = action.payload;
    },

    [fetchOneDraft.rejected]: (state, action) => {
      state.oneDraftLoading = false;
      state.error.failed = true;
      state.error.message = action.payload;
    }
  },
});

export default draftsSlice.reducer;
