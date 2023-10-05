import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const url = 'http://localhost:3000/login'

const fetchlogin = createAsyncThunk('login/fetchlogin', async (userData) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                email: userData.email,
                password: userData.password,
            }
        })
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;
});

const initialState = {
    user: {
        email: '',
        password: '',
      },
      loading: false,
      error: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchlogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchlogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                console.log(action.payload);
            })
            .addCase(fetchlogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export { fetchlogin };
export default loginSlice.reducer;
