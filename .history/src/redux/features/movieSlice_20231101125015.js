import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../../services/MovieService";
import axios from "axios";

const initialState = [];

export const getAllMovies = createAsyncThunk(
    "movies/getAllMovies",
    async () => {
        const response = await axios.get("");
        return response.data;
    }
);

export const Movieslice = createSlice({
    name: "movies",
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
