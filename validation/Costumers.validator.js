import Joi from "joi";


export const CustomerValidator=Joi.object({
    name:Joi.string().min(1).required(),
    adress:Joi.string().required(),
    contact_number:Joi.string().required(),
    email:Joi.string().required(),
    passport:Joi.string().required()
})