// eslint-disable-next-line no-unused-vars
import React,{useCallback, useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlayers } from "../../redux/features/playerSlice";

const Players = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const moviesData = useSelector(state => state.players);
    const dispatch = useDispatch();

    console.log(moviesData);
    const initFetchData = useCallback(() => {
        dispatch(getAllPlayers());
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
                    placeholder="Search player..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-400 rounded py-2 px-4 mr-2 w-[300px]"
                />
            </div>
            <div className="flex justify-between items-center flex-wrap">
                {/* {moviesData.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                        />
                    );
                })} */}
            </div>
        </>
    );
};

export default Movies;

