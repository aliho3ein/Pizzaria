import { configureStore } from "@reduxjs/toolkit";

/* Slices */
import castReducer from "./slices/cast";

const store = configureStore({
  reducer: {
    castReducer,
  },
});

export default store;
