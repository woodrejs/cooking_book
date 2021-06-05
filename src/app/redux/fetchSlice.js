import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    progress: null, // options: success, failed, inProgress, null
  },
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProgress } = fetchSlice.actions;

export default fetchSlice.reducer;
