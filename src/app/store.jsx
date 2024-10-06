import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, //Login olmuşmu olmamışmı,token saklanmışmı saklanmamışmı
    stock: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
