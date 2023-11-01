import React from "react";

const PlayerCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Player Avatar"
            />
            <div className="text-center mt-2">
                <h3 className="text-lg font-medium">Player Name</h3>
                <p className="text-gray-500">Player Position</p>
            </div>
        </div>
    );
};

export default PlayerCard;