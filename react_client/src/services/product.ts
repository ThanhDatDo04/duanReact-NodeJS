import axios from "axios";
import { Product } from "../types/Product";

export const getAllProduct = () => {
  return axios.get("http://localhost:8080/products");
};

export const getProductDetail = (_id: string) => {
  return axios.get("http://localhost:8080/products/" + _id);
};
export const handleDelte = (_id: string) => {
  return axios.delete("http://localhost:8080/products/" + _id);
};
export const handleAdd = (data: Product) => {
  return axios.post("http://localhost:8080/products/", data);
};
export const handleEdit = (id: string, data: Product) => {
  return axios.put("http://localhost:8080/products/" + id, data);
};
