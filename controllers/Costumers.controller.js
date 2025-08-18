import { Customer } from "../models/Customers.js"
import { CustomerPatchValidator, CustomerValidator } from "../validation/Costumers.validator.js"


export const GetCustomer=async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    try {
        let data=await Customer.find().skip((page - 1) * limit).limit(limit);
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const GetOneCustomer=async (req,res)=>{
    let {id}=req.params
    try {
        let data=await Customer.findOne({_id:id});
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostCustomer=async(req,res)=>{
    try {
        let {value,error}=CustomerValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newCustomer= new Customer(value)
        await newCustomer.save()
        res.send(newCustomer)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchCustomer=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Customer.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Customer doesn't exists"})
        }
        let {value,error}=CustomerPatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newCustomer= await Customer.findByIdAndUpdate(id,value,{new:true})
        res.send(newCustomer)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelCustomer=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Customer.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Customer doesn't exists"})
        }
        let newCustomer= await Customer.findByIdAndDelete(id)
        res.send(newCustomer)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}