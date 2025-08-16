import Joi from "joi";

export const Contract_typeValidator = Joi.object({
  months: Joi.number().valid(5, 10, 15).required(),
  percentage: Joi.number().valid(26, 41, 52).required(),
  name: Joi.string().min(1).required()
});
