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

const initialstate = {
    name: '',
    contact: '',
    price: '',
    carriage_capacity: '',
    image: '',
    model: '',
    description: '',
}
const addItemSlice = createSlice({
    name: 'item',
    initialstate,
    reducers: {
        setFormData: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
    extraReducers(builder) {
        builder.addCase(addItem.fulfilled, (state, action) => {
            return {
                ...state, 
                name: action.payload.name,
                contact: action.payload.contact,
                price: action.payload.price,
                carriage_capacity: action.payload.carriage_capacity,
                image: action.payload.image,
                model: action.payload.model,
                description: action.payload.description
            }
        })
    }
})

export { addItem };
export const { setFormData } = addItemSlice.actions;
export default addItemSlice.reducer;