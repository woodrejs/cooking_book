import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    response: {},
  },
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
    },
  },
});

export const { setResponse } = postSlice.actions;

export default postSlice.reducer;
