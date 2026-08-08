// store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "@/features/modalSlice"; // <-- on importe le reducer par défaut

export const store = configureStore({
  reducer: {
    modal: modalReducer 
  },
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;
