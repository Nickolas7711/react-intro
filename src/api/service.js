import axios from "axios";

export default axios.create({
    baseURL: 'https://64fb155ccb9c00518f7a9f38.mockapi.io/api/v1/',
    headers: {'Content-Type': 'application/json'}
  });