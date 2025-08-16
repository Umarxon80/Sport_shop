import Joi from "joi";


export const BrandValidator=Joi.object({
    name:Joi.string().min(1).required(),
    adress:Joi.string().required(),
    contact_number:Joi.string().required(),
    email:Joi.string().email().required()
})