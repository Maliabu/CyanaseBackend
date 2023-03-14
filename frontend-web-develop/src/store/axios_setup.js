import axios from "axios";
const API_URL = "http://localhost:3000/api/V1";
const token = localStorage.getItem("token");

let settings = {
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
};

export default axios.create(settings);