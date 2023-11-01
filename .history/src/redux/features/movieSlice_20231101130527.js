import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieService from "../../services/MovieService";

const initialState = [];

export const getAllMovies = createAsyncThunk(
    "movies/getAllMovies",
    async () => {
        const response = await ;
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
