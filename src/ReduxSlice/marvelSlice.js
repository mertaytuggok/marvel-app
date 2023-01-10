import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const hash = process.env.REACT_APP_API_HASH;
export const fetchCharaters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(
      `${baseUrl}/v1/public/characters?limit=55&ts=1&apikey=${apiKey}&hash=${hash}`
    );
    return res.data;
  }
);
export const fetchComics = createAsyncThunk("comics/getComics", async () => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_URL}/v1/public/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}`
  );
  return res.data;
});
export const marvelSlice = createSlice({
  name: "marvel",
  initialState: {
    character: [],
    comic: [],
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

    // get comics
    builder.addCase(fetchComics.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComics.fulfilled, (state, action) => {
      state.comic = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchComics.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default marvelSlice.reducer;
