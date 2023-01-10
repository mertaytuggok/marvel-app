import { configureStore } from "@reduxjs/toolkit";
import marvelSlice from "../ReduxSlice/marvelSlice";

export const Store = configureStore({
  reducer: {
    marvel: marvelSlice,
  },
});
