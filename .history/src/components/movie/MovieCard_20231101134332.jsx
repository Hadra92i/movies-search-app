// eslint-disable-next-line no-unused-vars
import React from "react";

const MovieCard = ({Title, Year, Poster, Type}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 my-2 w-[290px] h-[300px]">
           {
                Poster &&  <img
                className="w-36 h-36 rounded-full mx-auto"
                src={Poster}
                alt="Movie Avatar"
                /> : <p>No image found</p>
           }
            <div className="text-center mt-3">
                <h3 className="text-lg font-medium">{Title}</h3>
                <p className="text-gray-500">{Year}</p>
                <p className="text-gray-500">Type : {Type}</p>
            </div>
        </div>
    );
};

export default MovieCard;