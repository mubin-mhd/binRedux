import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import countReducers from "../features/countSlice";
import autReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: countReducers,
    auth: autReducer,
  },
});
