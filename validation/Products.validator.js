import Joi from "joi";


export const ProductValidator=Joi.object({
    name:Joi.string().min(1).required(),
    shop_id:Joi.string().required(),
    brand_id:Joi.string().required(),
    price:Joi.number().min(0.1).required(),
    desc:Joi.string().required(),
    isnew:Joi.boolean().required(),
    category_id:Joi.string().required(),
    img:Joi.string().required()
})

export const ProductPatchValidator=Joi.object({
    name:Joi.string().min(1),
    shop_id:Joi.string(),
    brand_id:Joi.string(),
    price:Joi.number().min(0.1),
    desc:Joi.string(),
    isnew:Joi.boolean(),
    category_id:Joi.string(),
    img:Joi.string()
})