// eslint-disable-next-line no-unused-vars
import axiosObj from "../http-common";

const getAllMovies = () => {
    return axiosObj.get("/");
};

const MovieService = {
    getAllMovies,
};

export default MovieService;
