import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice, //name of slice and reducer
  },
});

export default store;
