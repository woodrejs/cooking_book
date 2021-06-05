import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    progress: null, // options: success, failed, inProgress, null
    data: {},
  },
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProgress, setData } = fetchSlice.actions;

export default fetchSlice.reducer;
