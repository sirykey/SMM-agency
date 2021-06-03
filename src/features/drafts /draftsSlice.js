import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../app/api';

export const fetchDrafts = createAsyncThunk(
  'drafts/fetchDrafts',
  async () => {
    const response = await api.get('/posts')
    return response.data;
  }
)

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
    }
  }
})

export default draftsSlice.reducer;