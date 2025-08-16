import Joi from "joi";


export const PaymentValidator=Joi.object({
    check_numb:Joi.string().min(1).required(),
    sum:Joi.number().min(1).required(),
    contract_id:Joi.string().required(),
    status:Joi.boolean(),
    type:Joi.string().valid("Cash","Card").required()
})