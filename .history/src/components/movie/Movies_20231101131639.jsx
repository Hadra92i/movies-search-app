// eslint-disable-next-line no-unused-vars
import React,{useCallback, useEffect, useState} from "react";
// eslint-disable-next-line no-unused-vars
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../redux/features/movieSlice";

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const moviesData = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const initFetchData = useCallback(() => {
        dispatch(getAllMovies());
    },[dispatch]);

    useEffect(() => {
        initFetchData()
      }, [initFetchData])
    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="flex justify-center items-center mb-5">
                <input
                    type="text"
                    placeholder="Search a movie..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-400 rounded py-2 px-4 mr-2 w-[300px]"
                />
            </div>
            <div className="flex justify-between items-center flex-wrap">
                {moviesData.map((movie) => {
                    console.log(movie);
                    return (
                        <MovieCard
                            key={movie.id}
                            
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Movies;

