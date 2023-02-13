import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import supabase from "../config/supabase";

export const getListTodo = createAsyncThunk("todo/getListTodo", async () => {
  const { data } = await supabase.from("todolist").select("*");
  return data;
});

export const insertTodo = createAsyncThunk(
  "todo/insertTodo",
  async (payload) => {
    const ifImportant = payload.important == "notImportant";
    const { data, error } = await supabase.from("todolist").insert([
      {
        title: payload.title,
        description: payload.description,
        completed: payload.completed,
        important: !ifImportant,
        dir: payload.dir,
      },
    ]);
  }
);

export const updateImportant = createAsyncThunk(
  "todo/updateImportant",
  async (payload) => {
    console.log(payload);
    const { data, error } = await supabase
      .from("todolist")
      .update({ important: !payload.isImportant })
      .eq("id", payload.id);
  }
);

export const updateComplete = createAsyncThunk(
  "todo/updateComplete",
  async (payload) => {
    console.log(payload);
    const { data, error } = await supabase
      .from("todolist")
      .update({
        completed:
          payload.isComplete === "complete" ? "uncomplete" : "complete",
      })
      .eq("id", payload.id);
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (payload) => {
    const { data, error } = await supabase
      .from("todolist")
      .delete()
      .eq("id", payload);
  }
);

export const searchTodo = createAsyncThunk(
  "todo/searchTodo",
  async (payload) => {
    const { data, error } = await supabase
      .from("todolist")
      .select()
      .textSearch("title", payload);
    console.log("sesudah filter", data);
    return data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todosData: [],
    todoSearch: [],
    isLoading: false,
    isLoad: false,
    isSuccess: false,
  },
  extraReducers: {
    [getListTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todosData = action.payload;
    },
    [getListTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [insertTodo.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [deleteTodo.pending]: (state, action) => {
      state.isLoad = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoad = false;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.isSuccess = true;
      state.isLoad = false;
    },
    [updateImportant.pending]: (state, action) => {
      state.isLoad = true;
    },
    [updateImportant.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.isSuccess = true;
    },
    [updateImportant.rejected]: (state, action) => {
      state.isLoad = false;
    },
    [updateComplete.pending]: (state, action) => {
      state.isLoad = true;
    },
    [updateComplete.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.isSuccess = true;
    },
    [updateComplete.rejected]: (state, action) => {
      state.isLoad = false;
    },
    [searchTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [searchTodo.fulfilled]: (state, action) => {
      state.todosData = action.payload;
      state.isLoading = false;
    },
  },
});

export const todoSelector = todoSlice.actions;
export default todoSlice.reducer;
