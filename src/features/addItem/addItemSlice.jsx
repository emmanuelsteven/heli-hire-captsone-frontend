import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const  url = 'http://localhost:3000/api/helicopter'

const addItem = createAsyncThunk('item/addItem', async () => {
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
    const data = await response.json();
    return data;
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
            state.helicopter = action.payload;
            console.log(action.payload);
          })
          .addCase(addItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
          });
      },
})

export { addItem };
export default addItemSlice.reducer;