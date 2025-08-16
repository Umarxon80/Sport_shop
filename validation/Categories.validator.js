import Joi from "joi";


export const CategoryValidator=Joi.object({
    name:Joi.string().min(1).required()
})

export const CategoryPatchValidator=Joi.object({
    name:Joi.string().min(1)
})