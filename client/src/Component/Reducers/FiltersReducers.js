import { createSlice } from "@reduxjs/toolkit";

const FiltersSlice = createSlice({
  name: "filters",
  initialState: {
    searchValue: "",
    category: "all",
    company: "all",
    color: "all",
    price: 309999,
    shipping : false
  },
  reducers: {
    searchFilter(state, action) {
      state.searchValue = action.payload;
    },
    categoryFilter(state, action) {
      state.category = action.payload;
    },
    companyFilter(state, action) {
      state.company = action.payload;
    },
    colorFilter(state, action) {
      state.color = action.payload;
    },
    priceFilter(state, action) {
      state.price = action.payload;
    },
    checkBoxFilter(state, action) {
      state.shipping = action.payload
    },
  },
});

export const filtersAction = FiltersSlice.actions;

export default FiltersSlice;
