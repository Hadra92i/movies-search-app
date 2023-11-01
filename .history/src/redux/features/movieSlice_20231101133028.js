import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getAllMovies = createAsyncThunk(
    "movies/getAllMovies",
    async () => {
        const response = await axios.get("http://www.omdbapi.com/?apikey=6c75eeac&s='avengers'");
        return response.data;
    }
);

export const search

export const Movieslice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            return [...action.payload.Search];
        },
        // eslint-disable-next-line no-unused-vars
        [getAllMovies.rejected]: (state, action) => {
            return state;
        }
    },
});

export default Movieslice.reducer;
