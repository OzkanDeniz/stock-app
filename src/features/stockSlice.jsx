import { createSlice } from "@reduxjs/toolkit"; //?rxS = reduxSlice kısayolu

const initialState = {
  firms: [{}],
  products: [],
  sales: [],
  purchases: [],
  brands: [],
  categories: [],
  loading: [],
  error: [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getFirmsSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms = payload;
    },
    getSalesSuccess: (state, { payload }) => {
      state.loading = false;
      state.sales = payload;
    },

    // action:{type:"", payload:""}//? action objesi
    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.path] = payload.data //?path değişken olduğu için squarebracket[] içine aldık [payload.path].

    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {fetchStart,getFirmsSuccess,fetchFail,getSalesSuccess,getStockSuccess} = stockSlice.actions;

export default stockSlice.reducer;
