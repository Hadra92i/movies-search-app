import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../../services/MovieService";

const initialState = [];

export const getAllMovies = createAsyncThunk(
    "Movies/getAllMovies",
    async () => {
        const response = await MovieService.getAllMovies();
        return response.data;
    }
);

export const Movieslice = createSlice({
    name: "Movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            console.log(action.payload);
            return [...action.payload];
        },
        [getAllMovies.rejected]: (state, action) => {
            console.log(action.error);
            return state;
        }
    },
});

export default Movieslice.reducer;
