import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import countReducers from "../features/countSlice";
import autReducer from "../features/authSlice";
import todoReducer from "../features/todoSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: countReducers,
    auth: autReducer,
    todo: todoReducer,
    modal: modalReducer,
  },
});
