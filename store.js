import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categories/categorySlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
  },
});

export default store;
