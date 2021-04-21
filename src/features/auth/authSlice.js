import { api } from '../../app/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('auth/fetchData',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await api.post('/login', {
                data: {
                    username: username,
                    password: password
                }
            });

            if(response.data.status === "success") {
                console.log(response.data);
            } else {
                return rejectWithValue(response.data);
            }

        }
        catch (e) {
            return rejectWithValue(e.message);
        }
    });

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        error: {
            failed: false,
            message: null
        },
        items: {},
    },


    extraReducers: {
        [fetchData.pending]: (state) => {
            state.loading = true
            state.error.failed = false
            state.error.message = null;
        },

        [fetchData.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = true;
            // state.username = action.meta.arg.username;
            // state.password = action.meta.arg.password;
        },

        [fetchData.rejected]: (state, action) => {
            state.error.message = action.payload.message;
            state.error.failed = true;
        }
    }
})

export default authSlice.reducer;