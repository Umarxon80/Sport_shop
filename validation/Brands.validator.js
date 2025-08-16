import Joi from "joi";


export const BrandValidator=Joi.object({
    name:Joi.string().min(1).required()
})

export const BrandPatchValidator=Joi.object({
    name:Joi.string().min(1)
})