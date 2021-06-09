import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import postReducer from "./postSlice";

export default configureStore({
  reducer: {
    form: formReducer,
    post: postReducer,
  },
});
