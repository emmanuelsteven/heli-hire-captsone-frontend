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

const initialState = {
  helicopter: [],
};

const helicopterSlice = createSlice({
  name: "helicopter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHelicopters.fulfilled, (state, action) => {
      const helicopterfetched = action.payload;
      return { ...state, helicopter: helicopterfetched };
    });
  },
});

export { fetchHelicopters };
export default helicopterSlice.reducer;
