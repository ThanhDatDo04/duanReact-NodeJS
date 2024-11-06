import axios from "axios";
import { Cart } from "../types/Cart";

export const getAllCart = () => {
  return axios.get("http://localhost:8080/cart");
};
export const handleDelte = () => {
  return axios.delete("http://localhost:8080/cart/");
};
export const handleAddCart = (data: Cart) => {
  return axios.post("http://localhost:8080/cart/", data);
};
export const handleEdit = (data: Cart) => {
  return axios.put("http://localhost:8080/cart/", data);
};
