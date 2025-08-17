import { Contract } from "../models/Contracts.js"
import {Payment} from "../models/Payments.js"
import { PaymentPatchValidator, PaymentValidator } from "../validation/Payments.validator.js"


export const GetPayment=async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    try {
        let data=await Payment.find().skip((page - 1) * limit).limit(limit);
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostPayment=async(req,res)=>{
    try {
        let {value,error}=PaymentValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        if (value.status==true) {
            let contract= await Contract.findOne({_id:value.contract_id})
            if (!contract) {
                return res.send({message:"Bunday contract mavjud emas"})
            }
            if (contract.debt==0) {
                return res.send({message:"Qarzdorlik tolab bolingan"})
            }
            contract.paid+=value.sum
            let l = contract.paid + value.sum - contract.total; 
            contract.debt-=value.sum
            if (contract.debt<0) {
                contract.debt=0
                await Contract.findByIdAndUpdate(value.contract_id, {paid:contract.paid,debt:contract.debt}, { new:true });
                return res.send({message:"Qarzdorlik yopildi", kaytim:`${l}`})
            }
            await Contract.findByIdAndUpdate(value.contract_id, {paid:contract.paid,debt:contract.debt}, { new:true });
        }
        let newPayment= new Payment(value)
        await newPayment.save()
        res.send(newPayment)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchPayment=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Payment.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Payment doesn't exists"})
        }
        let {value,error}=PaymentPatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newPayment= await Payment.findByIdAndUpdate(id,value,{new:true})
        res.send(newPayment)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelPayment=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Payment.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Payment doesn't exists"})
        }
        let newPayment= await Payment.findByIdAndDelete(id)
        res.send(newPayment)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const Pay=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Payment.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Payment doesn't exists"})
        }
        
        let contract= await Contract.findOne({_id:check.contract_id})
            if (!contract) {
                return res.send({message:"Bunday contract mavjud emas"})
            }
            if (contract.debt==0) {
                return res.send({message:"Qarzdorlik tolab bolingan"})
            }
            contract.paid+=check.sum
            let l = contract.paid + check.sum - contract.total; 
            contract.debt-=check.sum
            if (contract.debt<0) {
                contract.debt=0
                await Contract.findByIdAndUpdate(check.contract_id, {paid:contract.paid,debt:contract.debt}, { new:true });
                 
                return res.send({message:"Qarzdorlik yopildi", kaytim:`${l}`})
            }
            await Contract.findByIdAndUpdate(check.contract_id, {paid:contract.paid,debt:contract.debt}, { new:true });
            check.status=true
        let newPayment= await Payment.findByIdAndUpdate(id,check,{new:true})
        res.send(newPayment)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}
