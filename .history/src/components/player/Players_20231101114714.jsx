// eslint-disable-next-line no-unused-vars
import React from "react";

const Players = () => {
    const players = [
        { name: "John", age: 25, cardPlayer: true },
        { name: "Jane", age: 30, cardPlayer: false },
        { name: "Bob", age: 20, cardPlayer: true },
        { name: "Mary", age: 27, cardPlayer: false }
    ];

    const getCardPlayers = () => {
        return players.filter(player => player.cardPlayer);
    }

    return (
        <div>
            <h1>Players</h1>
            <ul>
                {players.map(player => (
                    <li key={player.name}>{player.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Players;
