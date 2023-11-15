import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from "./features/sessions/sessionsSlice";
import helicopterReducer from './features/helicopters/helicopterSlice';
import paginationReducer from "./features/pagination/paginationSlice";
import addItemReducer from "./features/addItem/addItemSlice";
import reservationReducer from "./features/reservations/reservationSlice";

const store = configureStore({
    reducer: {
        helicopter: helicopterReducer,
        pagination: paginationReducer,
        sessions: sessionsReducer,
        item: addItemReducer,
        reservations: reservationReducer, 
        
    },
})

export default store;
