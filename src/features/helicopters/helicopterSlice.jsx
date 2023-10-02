import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    helicopter: {},
}

const helicopterSlice = createSlice({
    name: 'helicopter',
    initialState,
});

console.log();

export default helicopterSlice.reducer;