import { configureStore } from "@reduxjs/toolkit";
import addTeamReducer from "./teamSlice";

export const store = configureStore({
  reducer: {
    footballScoreSlice: addTeamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;