// eslint-disable-next-line no-unused-vars
import React,{useCallback, useState} from "react";
import PlayerCard from "./PlayerCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlayers } from "../../redux/features/playerSlice";

const Players = () => {
    const [players, setPlayers] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const playersData = useSelector(state => state.players);
    const dispatch = useDispatch();

    
    const initFetchData = useCallback(() => {
        dispatch(getAllPlayers())
    });
    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlayers = players.filter((player) => {
        return player.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

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
                {filteredPlayers.map((player) => {
                    return (
                        <PlayerCard
                            key={player.id}
                            name={player.name}
                            age={player.age}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Players;

