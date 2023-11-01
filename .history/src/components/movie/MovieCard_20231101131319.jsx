// eslint-disable-next-line no-unused-vars
import React from "react";

const MovieCard = ({Title, Year, Poster, Type}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 my-2 w-[200px]">
            <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://via.placeholder.com/200"
                alt="Player Avatar"
            />
            <div className="text-center mt-2">
                <h3 className="text-lg font-medium">{Title}</h3>
                <p className="text-gray-500">{Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;