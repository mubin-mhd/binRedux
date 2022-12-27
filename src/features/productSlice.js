import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import supabase from "../config/supabase";

export const getListProduct = createAsyncThunk(
  "product/getListProduct",
  async (loadHandler) => {
    loadHandler(true);
    const { data } = await supabase.from("products").select("*");
    if (data) {
      loadHandler(false);
    }
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (dataHit) => {
    const { loading, id, setCounter } = dataHit;
    loading(true);
    console.log("ini id", dataHit);
    const hasilDelete = await supabase.from("products").delete().eq("id", id);
    const { status } = hasilDelete;
    if (status === 204) {
      loading(false);
      setCounter((prev) => prev + 1);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (hitAdd) => {
    const { data, loading, setCounter } = hitAdd;
    loading(true);
    const result = await supabase.from("products").insert([data]);
    const { status } = result;
    if (status === 201) {
      loading(false);
      setCounter((prev) => prev + 1);
    }
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getListProduct.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    },
    [addProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
