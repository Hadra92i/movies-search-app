import axios from 'axios';

const API_KEY = 'YOUR_OMDB_API_KEY'; 
const BASE_URL = 'http://www.omdbapi.com';

const axiosObj = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export default axiosObj;
