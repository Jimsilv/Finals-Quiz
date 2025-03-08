import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Automatically attach JWT token
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
