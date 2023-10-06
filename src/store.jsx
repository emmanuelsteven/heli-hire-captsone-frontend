import { configureStore } from "@reduxjs/toolkit";
import helicopterReducer from './features/helicopters/helicopterSlice';
import paginationReducer from "./features/pagination/paginationSlice";
import sessionsReducer from "./features/sessions/sessionsSlice";
import signupReducer from "./features/signup/signupSlice";
import loginReducer from "./features/Login/loginSlice";

const store = configureStore({
    reducer: {
        helicopter: helicopterReducer,
        pagination: paginationReducer,
        sessions: sessionsReducer,
        signup: signupReducer,
        login: loginReducer,
    },
})

export default store;