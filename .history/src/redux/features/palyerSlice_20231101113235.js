import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const getAllPlayers = createAsyncThunk("players/getAllPlayers", async () => {
    const response = await 
});

export const playerSlice = createSlice({
    name : "player",
    initialState,
    reducers : {},
    extraReducers : {

    }
});

export default playerSlice.reducer;