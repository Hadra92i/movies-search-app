import axios from 'axios';

const API_KEY = '6c75ee'; 
const BASE_URL = 'http://www.omdbapi.com';

const axiosObj = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export default axiosObj;
