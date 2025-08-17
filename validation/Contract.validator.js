import Joi from "joi";


export const ContractValidator=Joi.object({
    contract_number:Joi.number(),
    product_id:Joi.string().min(1).required(),
    customer_id:Joi.string().required(),
    contract_type_id:Joi.string().required(),
    date:Joi.date(),
    end_date:Joi.date(),
    shop_id:Joi.string().required(),
    debt:Joi.number().min(0),
    first_payment:Joi.number().required(),
    paid:Joi.number()
})

export const ContractPatchValidator=Joi.object({
    contract_number:Joi.number(),
    product_id:Joi.string().min(1),
    customer_id:Joi.string(),
    contract_type_id:Joi.string(),
    date:Joi.date(),
    end_date:Joi.date(),
    shop_id:Joi.string(),
    debt:Joi.number().min(0),
    first_payment:Joi.number(),
    paid:Joi.number()
})