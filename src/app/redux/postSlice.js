import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    response: {},
    inProgress: false,
  },
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    setInProgress: (state, action) => {
      state.inProgress = action.payload;
    },
  },
});

export const { setResponse, setInProgress } = postSlice.actions;

export default postSlice.reducer;
