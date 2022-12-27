import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    angka: 0,
    totalNilai: 0,
    nilaiAwal: 0,
    nilaiAkhir: 0,
  },
  reducers: {
    increment: (state) => {
      if (state.angka > 0) {
        state.angka -= 1;
      }
    },
    decrement: (state) => {
      state.angka += 1;
    },
    penjumlahan: (state) => {
      state.totalNilai = state.angka**2;
    },
  },
});

export const { increment, decrement, penjumlahan } = countSlice.actions;
export default countSlice.reducer;
