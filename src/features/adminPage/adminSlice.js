import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../app/api";

export const fetchRegistration = createAsyncThunk('addWorkers/fetchRegistration',
    async ({firstname, surname, email}, {rejectWithValue} ) => {
       try {
           const response = await api.post('/users', {
               data: {
                   firstname: firstname,
                   surname: surname,
                   email: email
               }
           })
           if(response.data.status === "success") {
               return response.data;
           } else {
               return rejectWithValue(response.data)
           }

       } catch (e) {
           rejectWithValue(e.message)
       }
    }
    )

const adminSlice = createSlice({
    name:'addWorkers',
    initialState: {
        loading: false,
        error: {
            failed: false,
            message: null
        },
        firstname: null,
        surname: null,
        email: null

    },

    extraReducers:{
        [fetchRegistration.pending]: (state) => {
            state.loading = true;
            state.error.failed = false;
            state.error.message = null;
        },

        [fetchRegistration.fulfilled]: (state, action) => {
            state.loading = false;
            state.firstname = state.meta.arg.firstname;
            state.surname = state.meta.arg.surname;
            state.email = action.meta.arg.email;
        },

        [fetchRegistration.rejected]: (state, action) => {
            state.error.message = action.payload.message;
            state.error.failed = true;
        }
    }

})

export default adminSlice.reducer;