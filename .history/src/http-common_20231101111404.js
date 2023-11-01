import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api-football-v1.p.rapidapi.com/v3/players";

const axiosObj = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "example.com",
    },
});

export default axiosObj;
