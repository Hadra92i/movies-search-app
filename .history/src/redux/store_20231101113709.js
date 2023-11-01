import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/palyerSlice";

export const store = configureStore({
    reducer:playerReducer,
    playerReducer
});
