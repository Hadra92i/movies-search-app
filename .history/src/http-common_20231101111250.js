import axios from "axios";

const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://example.com/api";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "example.com",
    },
});

export default instance;
