import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice({
  name: "slotState",
  initialState: {
    slotState: {
      isIdle: true,
      isStopping: false,
    },
  },
  reducers: {
    reverseIdle: (state) => {
      state.slotState.isIdle = !state.slotState.isIdle;
    },
    reverseStopping: (state) => {
      state.slotState.isStopping = !state.slotState.isStopping;
    },
  },
});

export const { reverseIdle, reverseStopping } = slotSlice.actions;

export default slotSlice.reducer;
