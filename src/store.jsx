import { configureStore } from "@reduxjs/toolkit";
import helicopterReducer from './features/helicopters/helicopterSlice';
import paginationReducer from "./features/pagination/paginationSlice";
import signupReducer from "./features/signup/signupSlice";

const store = configureStore({
    reducer: {
        helicopter: helicopterReducer,
        pagination: paginationReducer,
        signup: signupReducer,
    },
})

export default store;