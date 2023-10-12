import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3000/api/helicopter";

const fetchHelicopters = createAsyncThunk(
  "helicopter/fetchHelicopters",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

// delete helicopter fetch here
export const deleteHelicopter = createAsyncThunk('helicopter/deleteHelicopter', async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
    })
  });
  const data = await response.json();
  console.log(data);
});

const initialState = {
  helicopter: [],
};

const helicopterSlice = createSlice({
  name: "helicopter",
  initialState,
  reducers: {
    updateHelicopters: (state, action) => {
      state.helicopter = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHelicopters.fulfilled, (state, action) => {
      const helicopterfetched = action.payload;
      return { ...state, helicopter: helicopterfetched };
    });
  },
});

export { fetchHelicopters };
export const { updateHelicopters } = helicopterSlice.actions;
export default helicopterSlice.reducer;
