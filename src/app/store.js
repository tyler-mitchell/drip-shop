import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import shirtSlice from "./shirtSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    shirt: shirtSlice,
  },
});
