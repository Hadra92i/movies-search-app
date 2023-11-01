import axios from 'axios';

const API_KEY = '6c75eeac'; 
const BASE_URL = 'http://www.omdbapi.com';

const axiosObj = axios.create({
  baseURL: BASE_URL,
  params: {
    s : '',
    apikey: API_KEY,
  },
});

export default axiosObj;
