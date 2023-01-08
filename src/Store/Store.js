import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../ReduxSlice/characterSlice";

export const Store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
