import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharaters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_URL}/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}`
    );
    return res.data;
  }
);
export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    character: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get Characters
    builder.addCase(fetchCharaters.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharaters.fulfilled, (state, action) => {
      state.character = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCharaters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default charactersSlice.reducer;
