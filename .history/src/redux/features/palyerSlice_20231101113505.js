import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PlayerService from "../../services/playerService";

const initialState = [];

export const getAllPlayers = createAsyncThunk(
    "players/getAllPlayers",
    async () => {
        const response = await PlayerService.getAllPlayers();
        return response.data;
    }
);

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {},
    extraReducers: {
        [] : (state, action)
    },
});

export default playerSlice.reducer;
