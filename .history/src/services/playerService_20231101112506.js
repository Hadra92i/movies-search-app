// eslint-disable-next-line no-unused-vars
import axiosObj from "../http-common";

const getAllPlayers = () => {
    return axiosObj.get("/palyers");
};

const PlayerService = {
    getAllPlayers,
};

export default PlayerService;
