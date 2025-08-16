import Joi from "joi";


export const ContractValidator=Joi.object({
    product_id:Joi.string().min(1).required(),
    customer_id:Joi.string().required(),
    contract_type_id:Joi.string().required(),
    date:Joi.date().required(),
    end_date:Joi.date().required(),
    shop_id:Joi.string.required(),
    debt:Joi.number().min(0).required(),
    first_payment:Joi.number().required(),
    paid:Joi.number()
})