import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModalAddTodo: false,
  openModalEditTodo: false,
  id: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalAddTodo(state) {
      state.openModalAddTodo = true;
    },
    closeModalAddTodo(state) {
      state.openModalAddTodo = false;
    },
    openModalEditTodo(state, action) {
      state.openModalEditTodo = true;
      state.id = action.payload;
    },
    closeModalEditTodo(state) {
      state.openModalEditTodo = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
