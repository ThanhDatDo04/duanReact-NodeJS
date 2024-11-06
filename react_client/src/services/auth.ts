import axios from "axios";

export type User = {
  email: string;
  password: string;
};

export const registerUser = (data: User) => {
  return axios.post("http://localhost:8080/register", data);
};

export const loginUser = (data: User) => {
  return axios.post("http://localhost:8080/login", data);
};
