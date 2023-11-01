import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const getAllPalyers = createAsyncThunk

export const playerSlice = createSlice({
    name : "player",
    initialState,
    reducers : {},
    extraReducers : {

    }
});

export default playerSlice.reducer;