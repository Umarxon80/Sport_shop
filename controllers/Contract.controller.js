import {Contract} from "../models/Contracts.js"
import { Product } from "../models/Products.js"
import { Contract_type } from "../models/Contract_types.js"
import { ContractPatchValidator, ContractValidator } from "../validation/Contract.validator.js"



export const GetContract=async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    try {
        let data=await Contract.find().skip((page - 1) * limit).limit(limit);
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}
export const GetOneContract=async (req,res)=>{
    let {id}=req.params
    try {
        let data=await Contract.findOne({_id:id});
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostContract=async(req,res)=>{
    let body=req.body
    body.paid=body.first_payment
    try {
        let {value,error}=ContractValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }        
        const contract_type = await Contract_type.findOne({_id:body.contract_type_id})
        const product = await Product.findOne({_id:body.product_id})
        if (!contract_type) {
            return res.send({message:"Bundat contract turi mavjud emas"}) 
        }
        if (!product) {
            return res.send({message:"Bundat mahsulot mavjud emas"})   
        }
        if (body.first_payment*4<product.price) {
            return res.send({message:"Birinchi tolov mahsulonning 25%dan kam bola olmaydi"})
        }
        let creditMonths = contract_type.months
        if (!body.date) {
            let now =new Date()
            let endDate =new Date()
            endDate.setMonth(endDate.getMonth() + creditMonths)
            body.date = now;     
            body.end_date = endDate; 
        }
        if (!body.end_date) {
            let endDate =new Date(body.date)
            endDate.setMonth(endDate.getMonth() + creditMonths)
            body.end_date = endDate
        }
        
        if (!body.debt) {
            let debt=(product.price-body.first_payment)*(1+(contract_type.percentage/100))
            body.debt=debt
        }
        
        if (!body.monthly_payments) {
            body.monthly_payments=body.debt/contract_type.months
        }     
        body.payment_for_month=false
        let newContract= new Contract(body)
        await newContract.save()
        res.send(newContract)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
    
}

export const PatchContract=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Contract.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Contract doesn't exists"})
        }
        let {value,error}=ContractPatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newContract= await Contract.findByIdAndUpdate(id,value,{new:true})
        res.send(newContract)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelContract=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Contract.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Contract doesn't exists"})
        }
        let newContract= await Contract.findByIdAndDelete(id)
        res.send(newContract)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}