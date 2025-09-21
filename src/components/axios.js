import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-m4eo.onrender.com", // adjust as needed
  auth: { username: "admin", password: "admin123" }
});

export default api;
