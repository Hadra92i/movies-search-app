import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import MovieService from "../../services/MovieService";
import axios from "axios";

const initialState = [];

export const getAllMovies = createAsyncThunk(
    "movies/getAllMovies",
    async () => {
        const response = await axios.get("https://www.omdbapi.com/?s=avengers&apikey=6c75eeac");
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
            console.log(action.error);
            return state;
        }
    },
});

export default Movieslice.reducer;
