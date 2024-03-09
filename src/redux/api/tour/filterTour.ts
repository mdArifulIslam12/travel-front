import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: [],
  search: "",
  sort: "",
  priceSortHigh: 211,
  priceSortLow: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addType: (state, action) => {
      state.type.push(action.payload);
    },
    addSort: (state, action) => {
      state.sort = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addPriceSortHigh: (state, action) => {
      state.priceSortHigh = action.payload;
    },
    addPriceSortLow: (state, action) => {
      state.priceSortLow = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  addType,
  addSearch,
  addSort,
  addPriceSortHigh,
  addPriceSortLow,
} = filterSlice.actions;
