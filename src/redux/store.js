// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    auth: authReducer, // ✅ Add auth reducer
  },
});

export default store;
