import { Cart } from "../model/cart";

export const getAllCart = async (req, res) => {
  const data = await Cart.find();
  res.status(200).json(data);
};

export const createCart = async (req, res) => {
  const data = await Cart(req.body).save();
  console.log(data);
  res.status(201).json(data);
};
export const deleteCart = async (req, res) => {
  const data = await Cart.findByIdAndDelete(req.params.id);
  res.status(201).json({ data, mes: "xoa thanh cong" });
};
export const updateCart = async (req, res) => {
  const data = await Cart.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(201).json({ data, mes: "update thanh cong" });
};
