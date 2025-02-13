import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import favoriteReducer from "./slice/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer.reducer,
  },
});