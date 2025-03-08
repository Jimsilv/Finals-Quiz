import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/", // Ensure this matches your backend
    headers: { "Content-Type": "application/json" },
});

export default API; // ✅ Corrected export statement
