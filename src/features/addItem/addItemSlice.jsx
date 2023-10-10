import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const  url = 'http://localhost:3000/api/helicopter'

const addItem = createAsyncThunk('item/addItem', async (formData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                helicopter: {
                    name: formData.name,
                    contact: formData.contact,
                    price: formData.price,
                    carriage_capacity: formData.carriage_capacity,
                    image: formData.image,
                    model: formData.model,
                    description: formData.description,
                }
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in addItem action:", error);
        throw error; // Rethrow the error to be handled in the `rejected` case.
    }
});

const initialState = {
  helicopter: {
    name: '',
    contact: '',
    price: '',
    carriage_capacity: '',
    image: '',
    model: '',
    description: '',
  },
  loading: false,
  error: null,
}
const addItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(addItem.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(addItem.fulfilled, (state, action) => {
            state.loading = false;
            console.log(state.payload);
            state.helicopter = action.payload;
          })
          .addCase(addItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
          });
      },
})

export { addItem };
export default addItemSlice.reducer;