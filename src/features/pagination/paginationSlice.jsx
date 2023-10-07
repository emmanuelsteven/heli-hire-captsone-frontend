import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    itemsPerPage: 3,
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        nextPage: (state) => {
            state.currentPage += 1;
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
    },
});

export const { nextPage, prevPage } = paginationSlice.actions;
export default paginationSlice.reducer;