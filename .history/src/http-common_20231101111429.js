import axios from "axios";

const API_KEY = "'9d2758a612msh2661c98a1972a2cp155232jsn62f754d1238a";
const BASE_URL = "https://api-football-v1.p.rapidapi.com/v3/players";

const axiosObj = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "example.com",
    },
});

export default axiosObj;
