import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import PlayerService from '../../services/playerService';

const initialState = [];

export const getAllPlayers = createAsyncThunk("players/getAllPlayers", async () => {
    const response = await PlayerService
});

export const playerSlice = createSlice({
    name : "player",
    initialState,
    reducers : {},
    extraReducers : {

    }
});

export default playerSlice.reducer;