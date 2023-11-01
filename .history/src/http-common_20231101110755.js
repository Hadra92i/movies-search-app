import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
    headers: {
      'X-RapidAPI-Key': '9d2758a612msh2661c98a1972a2cp155232jsn62f754d1238a',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
};

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});