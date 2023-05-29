import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice({
  name: "slotState",
  initialState: {
    isIdle: false,
    isStopping: false,
    result: [{ isEmoji: true }, { isEmoji: true }, { isEmoji: true }],
  },
  reducers: {
    reverseIdle: (state) => {
      state.isIdle = !state.isIdle;
    },
    reverseStopping: (state) => {
      state.isStopping = !state.isStopping;
    },
    addResult: (state, action) => {
      state.result.unshift(action.payload);
      state.result.pop();
    },
  },
});

export const { reverseIdle, reverseStopping, addResult } = slotSlice.actions;

export default slotSlice.reducer;
