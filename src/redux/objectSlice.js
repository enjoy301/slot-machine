import { createSlice } from "@reduxjs/toolkit";
import CONFIG from "../site.config";

export const objectSlice = createSlice({
  name: "object",
  initialState: {
    objectArray: [],
    originLength: 0,
  },
  reducers: {
    setArray: (state, action) => {
      const newArray = action.payload
        ? [...action.payload]
        : [...CONFIG.objectArray];

      state.originLength = newArray.length;

      newArray.unshift(newArray[newArray.length - 1]);
      newArray.push(newArray[1]);
      newArray.push(newArray[2]);

      if (newArray.length % 2 === 0) {
        newArray.push(newArray[3]);
      }

      state.objectArray = newArray;
    },
  },
});

export const { setArray } = objectSlice.actions;

export default objectSlice.reducer;
