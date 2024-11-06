import Joi from "joi";

export const userSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});
