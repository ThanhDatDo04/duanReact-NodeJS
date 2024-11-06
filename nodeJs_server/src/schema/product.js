import Joi, { ref } from "joi";

export const productSchema = Joi.object({
  id: Joi.string(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.any(),
  price: Joi.number().required().min(0),
});
