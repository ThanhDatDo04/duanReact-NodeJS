import axios from "axios";

const token = localStorage.getItem("token");

export const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});
