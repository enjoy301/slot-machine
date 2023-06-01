import { createSlice } from "@reduxjs/toolkit";
import CONFIG from "../site.config";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    config: {},
  },
  reducers: {
    setConfig: (state, action) => {
      state.config = action.payload ?? CONFIG;
    },
  },
});

export const { setConfig } = configSlice.actions;

export default configSlice.reducer;
