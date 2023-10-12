import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const postReservation = createAsyncThunk(
    'postReservation', async(data) => {
        const userId = JSON.parse(localStorage.getItem('userId'));
        const Reserve_url = `http://localhost:3000/api/users/${userId}/reservations`;
        const response = await axios.post(Reserve_url, data);
        return response.data;
    },
);

// 
export const getReservations = createAsyncThunk(
    'getReservations',
    async () => {
      const userId = JSON.parse(localStorage.getItem('userId'));
      const Reserve_url = `http://localhost:3000/api/users/${userId}/reservations`;
      const response = await axios.get(Reserve_url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const { data } = response;
  
      if (!Array.isArray(data)) {
        // Handle the case where data is not an array, e.g., set it to an empty array
        return [];
      }
  
      const reservation = data.map((reservation) => ({
        id: reservation.id,
        helicopter_id: reservation.helicopter_id,
        user_id: reservation.user_id,
        date: reservation.date,
        city: reservation.city,
        status: reservation.status,
      }));
  
      return reservation;
    }
  );
  
const initialState = {
    reservation: [],
    creationMsg: '',
    loading: false,
    error: '',
};

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        createMsgAction: (state, action) => {
            state.creationMsg = action.payload;
          },
          setRemoveReservation: (state, action) => {
            state.reservation = state.reservation.filter(
              (reservation) => reservation.helicopter_id !== action.payload,
            );
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postReservation.pending, (state) => {
                state.loading = true;
            })
            .addCase(postReservation.fulfilled, (state, action) => {
                state.reservation.push(action.payload);
                state.loading = false;
                state.creationMsg = 'success';
            })
            .addCase(postReservation.rejected, (state, action) => ({
                ...state,
                error: action.payload,
                creationMsg: action.error.message,
              }))
            .addCase(getReservations.pending, (state) => {
                state.loading = true;
            })
            .addCase(getReservations.fulfilled, (state, action) => {
                state.reservation = action.payload;
                state.loading = false;
            })
            .addCase(getReservations.rejected, (state, action) => ({
                ...state,
                error: action.payload,
              }));
    },
});

export const { createMsgAction, setRemoveReservation, updateReservations } = reservationSlice.actions;
export default reservationSlice.reducer;
