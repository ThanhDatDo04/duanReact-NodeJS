import { Product } from "../model/product";
import { productSchema } from "../schema/product";

export const getAllProduct = async (req, res) => {
  const data = await Product.find();
  res.status(200).json(data);
};
export const getOneProduct = async (req, res) => {
  const data = await Product.findById(req.params.id);
  res.status(200).json(data);
};
export const createProduct = async (req, res) => {
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  console.log(error);

  if (error) {
    const Mes = error.details.map((message) => message.message);
    res.status(201).json(Mes);
  } else {
    const data = await Product(req.body).save();
    res.status(201).json(data);
  }
};
export const deleteProduct = async (req, res) => {
  const data = await Product.findByIdAndDelete(req.params.id);
  res.status(201).json({ data, mes: "xoa thanh cong" });
};
export const updateProduct = async (req, res) => {
  const data = await Product.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(201).json({ data, mes: "update thanh cong" });
};
