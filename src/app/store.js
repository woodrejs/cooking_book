import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import fetchReducer from "./redux/fetchSlice";

export default configureStore({
  reducer: {
    form: formReducer,
    fetch: fetchReducer,
  },
});
