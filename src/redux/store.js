import { configureStore } from "@reduxjs/toolkit";
import slotReducer from "./slotSlice";

export default configureStore({
  reducer: {
    slot: slotReducer,
  },
});
