import { configureStore } from "@reduxjs/toolkit";
import helicopterReducer from './features/helicopters/helicopterSlice';
import paginationReducer from "./features/pagination/paginationSlice";
import reservationReducer from "./features/reservations/reservationSlice";
import sessionsReducer from "./features/sessions/sessionsSlice";

const store = configureStore({
    reducer: {
        helicopter: helicopterReducer,
        pagination: paginationReducer,
        reservations: reservationReducer, 
        sessions: sessionsReducer,
    },
})

export default store;