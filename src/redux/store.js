import { configureStore } from "@reduxjs/toolkit";
import slotReducer from "./slotSlice";
import configReducer from "./configSlice";
import objectReducer from "./objectSlice";
import { notionAPI } from "../apis/notionAPI";

export default configureStore({
  reducer: {
    slot: slotReducer,
    config: configReducer,
    object: objectReducer,
    [notionAPI.reducerPath]: notionAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notionAPI.middleware),
});
