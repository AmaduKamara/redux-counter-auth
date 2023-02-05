import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";

const store = configureStore({
  // Takes a single reducer or map of reducers
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
