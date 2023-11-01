import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../../services/MovieService";
import axios from "axios";

const initialState = [];

export const getAllMovies = createAsyncThunk(
    "movies/getAllMovies",
    async () => {
        const response = await axios.get("http://www.omdbapi.com/?apikey=[yourkey]&s=");
        return response.data;
    }
);

export const Movieslice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            return [...action.payload.Search];
        },
        [getAllMovies.rejected]: (state, action) => {
            return state;
        }
    },
});

export default Movieslice.reducer;
