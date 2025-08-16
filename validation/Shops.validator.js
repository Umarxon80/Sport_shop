import Joi from "joi";


export const ShopValidator=Joi.object({
    name:Joi.string().min(1).required(),
    adress:Joi.string().required(),
    contact_number:Joi.string().required(),
    email:Joi.string().email().required()
})

export const ShopPatchValidator=Joi.object({
    name:Joi.string().min(1),
    adress:Joi.string(),
    contact_number:Joi.string(),
    email:Joi.string().email()
})