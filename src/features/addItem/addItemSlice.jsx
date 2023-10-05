import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const  url = 'http://localhost:3000/api/helicopter'

const addItem = createAsyncThunk('item/addItem', async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
});

const initialState = {
    
}
const addItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
})

export { addItem };
export default addItemSlice.reducer;