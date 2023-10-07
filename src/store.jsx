import { configureStore } from "@reduxjs/toolkit";
import helicopterReducer from "./features/helicopters/helicopterSlice";
import paginationReducer from "./features/pagination/paginationSlice";

const store = configureStore({
  reducer: {
    helicopter: helicopterReducer,
    pagination: paginationReducer,
  },
});

export default store;
