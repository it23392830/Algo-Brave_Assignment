import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Uses configureStore to create the Redux store.
//Combines reducers: users: userReducer.
//Exports TypeScript types: RootState and AppDispatch.