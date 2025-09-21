import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-bh67.onrender.com/api", // adjust as needed
  auth: { username: "admin", password: "admin123" }
});

export default api;
