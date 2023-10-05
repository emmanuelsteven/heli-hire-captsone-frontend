import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Reserve_url = "http://localhost:3000/api/reservations";

export const postReservations = createAsyncThunk(
    'postReservation', async(data) => {
        const response = await axios.post(Reserve_url, data);
        return response.data;
    },
);

export const getReservations  = createAsyncThunk(
    'getReservations', async () => {
        const response = await axios.get(Reserve_url);
        const data = await response.data; 
        return data;
    }
);

const initialState = {
    reservation: [],
    loading: false,
    error: '',
    reservationsFetched: false,
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postReservations.pending, (state) => {
                state.loading = true;
            })
            .addCase(postReservations.fulfilled, (state, action) => {
                state.reservation.push(action.payload);
                state.loading = false;
            })
            .addCase(postReservations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getReservations.pending, (state) => {
                state.loading = true;
            })
            .addCase(getReservations.fulfilled, (state, action) => {
                state.reservation = action.payload;
                state.loading = false;
            })
            .addCase(getReservations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// export { getReservations };

export default reservationSlice.reducer;
