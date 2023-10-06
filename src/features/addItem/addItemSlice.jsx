import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const  url = 'http://localhost:3000/api/helicopter'

const addItem = createAsyncThunk('item/addItem', async () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    const data = await response.json();
    return data;
});

const initialState = {
   item: []
}
const addItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(addItem.pending, (state) => {
            // Handle pending state if needed
          })
          .addCase(addItem.fulfilled, (state, action) => {
            // Handle the successful response here
            console.log('Data:', action.payload);
            // You can update your state here if needed
          })
          .addCase(addItem.rejected, (state, action) => {
            // Handle the error state if needed
            console.error('Error:', action.error);
          });
      },
})

export { addItem };
export default addItemSlice.reducer;