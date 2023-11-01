// eslint-disable-next-line no-unused-vars
import axiosObj from "../http-common";

const getAllPlayers = () => {
    return axiosObj.get("");
};

const PlayerService = {
    getAllPlayers,
};

export default PlayerService;
