import { User } from "../model/auth";
import { userSchema } from "../schema/auth";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const singup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findByEmail = await User.findOne({ email });
    if (findByEmail) {
      return res.json("email đã tồn tại");
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    await new User({
      email: email,
      password: hashPassword,
    }).save();
    return res.json("suscess");
  } catch (error) {
    return res.status(401).json({
      msg: error.message,
    });
  }
};
export const signin = async (request, response) => {
  const { email, password } = request.body;

  // kiem tra xem user co ton tai hay khong
  const existUser = await User.findOne({ email: email });
  // neu user khong ton tai thi tra ve thong bao loi
  if (!existUser) {
    return response.status(400).json({ message: "Email khong ton tai" });
  }
  // neu user ton tai thi kiem tra mat khau
  const isValidPassword = await bcryptjs.compare(password, existUser.password);
  // neu mat khau khong dung thi tra ve thong bao loi
  if (!isValidPassword) {
    return response.status(400).json({ message: "Mat khau khong dung" });
  }
  const token = jwt.sign({ id: existUser._id }, "123456", { expiresIn: "1h" });
  response.cookie("token", token, { httpOnly: true });

  // neu mat khau dung thi tra ve thong tin user dang nhap
  existUser.password = undefined;
  return response.status(200).json({
    message: "Dang nhap thanh cong",
    user: existUser,
    token,
  });
};
