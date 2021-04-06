import { api } from '../../app/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('auth/fetchData',
    async ({ login, password }, { rejectWithValue }) => {
        try {
            const response = await api.post('/todos?_limit=15', {
                data: {
                    login: login,
                    password: password
                }
            })

            if(response.data.status === "success") {
                return response.data;
            } else {
                return rejectWithValue(response.data)
            }

        }
        catch (e) {
            return rejectWithValue(e.message);
        }
    })

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        error: {
            failed: false,
            message: null
        },
        token: null,
        login: null,
        password: null
    },

    extraReducers: {
        [fetchData.pending]: (state) => {
            state.loading = true
            state.error.failed = false
            state.error.message = null;
        },

        [fetchData.fulfilled]: (state, action) => {
            state.token = action.payload.token;
            state.loading = false;
            state.login = action.meta.arg.login;
        },

        [fetchData.rejected]: (state, action) => {
            state.error.message = action.payload.message;
            state.error.failed = true;
        }
    }
})