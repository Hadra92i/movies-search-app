// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import PlayerCard from "./PlayerCard";

const Players = () => {
    const playersData = [
        { name: "John", age: 25, cardPlayer: true, id: 1 },
        { name: "Jane", age: 30, cardPlayer: false, id: 2 },
        { name: "Bob", age: 20, cardPlayer: true, id: 3 },
        { name: "Mary", age: 27, cardPlayer: false, id: 4 },
        { name: "John", age: 25, cardPlayer: true, id: 5 },
        { name: "Jane", age: 30, cardPlayer: false, id: 6 },
        { name: "Bob", age: 20, cardPlayer: true, id: 7 },
        { name: "Mary", age: 27, cardPlayer: false, id: 8 }
    ];

    // eslint-disable-next-line no-unused-vars
    const [players, setPlayers] = useState(playersData);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlayers = players.filter((player) => {
        return player.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className="flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Search player..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-400 rounded py-2 px-4 mr-2 w-[200px]"
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

