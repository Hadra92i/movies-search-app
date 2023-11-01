// eslint-disable-next-line no-unused-vars
import React from "react";
import PlayerCard from "./PlayerCard";

const Players = () => {
    const players = [
        { name: "John", age: 25, cardPlayer: true, id: 1 },
        { name: "Jane", age: 30, cardPlayer: false, id: 2 },
        { name: "Bob", age: 20, cardPlayer: true, id: 3 },
        { name: "Mary", age: 27, cardPlayer: false, id: 4 }
    ];

    return (
        <div>
            <h1>Players</h1>
             {
                <PlayerCard name = ""/>
             }
        </div>
    );
}

export default Players;
