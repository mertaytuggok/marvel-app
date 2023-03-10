import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharaters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(
      `https://gateway.marvel.com:443/v1/public/characters?limit=55&ts=1&apikey=2af4b4a2bfad80f5782cf0036e849d6c&hash=ec590c972daa14a7d1b022799e7c53dd`
    );
    return res.data;
  }
);
export const fetchComics = createAsyncThunk("comics/getComics", async () => {
  const res = await axios(
    `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=2af4b4a2bfad80f5782cf0036e849d6c&hash=ec590c972daa14a7d1b022799e7c53dd`
  );
  return res.data;
});

export const fetchDetailCharacter = createAsyncThunk(
  "detailCharatcer/getDetailCharactar",
  async (id) => {
    const res = await axios(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2af4b4a2bfad80f5782cf0036e849d6c&hash=ec590c972daa14a7d1b022799e7c53dd`
    );
    return res.data;
  }
);

export const marvelSlice = createSlice({
  name: "marvel",
  initialState: {
    character: [],
    comic: [],
    detailCharacter: [],
    isLoading: false,
    error: false,
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
    }); // get detailCard
    builder.addCase(fetchDetailCharacter.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetailCharacter.fulfilled, (state, action) => {
      state.detailCharacter = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchDetailCharacter.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default marvelSlice.reducer;
