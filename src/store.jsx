import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from "./features/sessions/sessionsSlice";
import helicopterReducer from './features/helicopters/helicopterSlice';
import paginationReducer from "./features/pagination/paginationSlice";

const store = configureStore({
    reducer: {
        helicopter: helicopterReducer,
        pagination: paginationReducer,
        sessions: sessionsReducer,
    },
})

export default store;
