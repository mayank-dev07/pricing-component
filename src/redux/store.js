import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import pricingReducer from "./pricingSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    pricing: pricingReducer,
  },
});

export default store;
