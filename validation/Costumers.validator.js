import Joi from "joi";


export const CustomerValidator=Joi.object({
    name:Joi.string().min(1).required(),
    adress:Joi.string().required(),
    contact_number:Joi.string().required(),
    email:Joi.string().email().required(),
    passport:Joi.string().required()
})

export const CustomerPatchValidator=Joi.object({
    name:Joi.string().min(1),
    adress:Joi.string(),
    contact_number:Joi.string(),
    email:Joi.string().email(),
    passport:Joi.string()
})