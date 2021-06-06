import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import fetchReducer from "./fetchSlice";

export default configureStore({
  reducer: {
    form: formReducer,
    fetch: fetchReducer,
  },
});
