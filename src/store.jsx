import { configureStore } from "@reduxjs/toolkit";
import helicopterReducer from './features/helicopters/helicopterSlice';
// import reservationSlice from "./features/reservations/reservationSlice";
import paginationReducer from "./features/pagination/paginationSlice";
import reservationReducer from "./features/reservations/reservationSlice";

const store = configureStore({
    reducer: {
        helicopter: helicopterReducer,
        pagination: paginationReducer,
        // reservation: reservationSlice,   
        reservation: reservationReducer, 
    },
})

export default store;