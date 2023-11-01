import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/movieSlice";

export const store = configureStore({
    reducer: {
        players: playerReducer,
    },
    devTools: true,
});

