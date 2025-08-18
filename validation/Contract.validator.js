import Joi from "joi";


export const ContractValidator=Joi.object({
    contract_number:Joi.number(),
    product_id:Joi.string().min(1).required(),
    customer_id:Joi.string().required(),
    contract_type_id:Joi.string().required(),
    date:Joi.date(), // auto
    end_date:Joi.date(),// auto
    monthly_payments:Joi.number(),// auto
    payment_for_month:Joi.boolean(),// auto
    shop_id:Joi.string().required(),
    debt:Joi.number().min(0),// auto
    first_payment:Joi.number().required(),
    paid:Joi.number(),// auto
    day_of_payment:Joi.number().min(1).max(30).required()
})

export const ContractPatchValidator=Joi.object({
    monthly_payments:Joi.number().min(1),
    contract_number:Joi.number(),
    product_id:Joi.string().min(1),
    customer_id:Joi.string(),
    contract_type_id:Joi.string(),
    date:Joi.date(),
    end_date:Joi.date(),
    shop_id:Joi.string(),
    payment_for_month:Joi.boolean(),
    debt:Joi.number().min(0),
    first_payment:Joi.number(),
    paid:Joi.number(),
    day_of_payment:Joi.number().min(1).max(30)
})