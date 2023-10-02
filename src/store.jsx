import { configureStore } from "@reduxjs/toolkit";
import helicopterReducer from './features/helicopters/helicopterSlice';
const store = configureStore({
    reducer: {
        helicopter: helicopterReducer,
    },
})

export default store;