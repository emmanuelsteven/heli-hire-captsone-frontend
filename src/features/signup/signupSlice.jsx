import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const url = 'http://localhost:3000/signup'

const fetchsignup = createAsyncThunk('signup/fetchsignup', async (userData) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                password_confirmation: userData.password_confirmation,
            }
        })
    });

    if (!response.ok) {
        throw new Error('Failed to signup');
    }

    const data = await response.json();
    return data;
});

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
      },
      loading: false,
      error: null,
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchsignup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchsignup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                console.log(action.payload);
            })
            .addCase(fetchsignup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export { fetchsignup };
export default signupSlice.reducer;
