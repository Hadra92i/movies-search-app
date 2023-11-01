import axios from "axios";

const API_KEY = "";
const BASE_URL = `http://www.omdbapi.com/?apikey=[${API_KEY}]&`;

const axiosObj = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
});

export default axiosObj;
