import {Contract_type} from "../models/Contract_types.js"
import {Contract_typePatchValidator, Contract_typeValidator } from "../validation/Contract_types.validator.js"


export const GetContract_type=async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    try {
        let data=await Contract_type.find().skip((page - 1) * limit).limit(limit);
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const GetOneContract_type=async (req,res)=>{
    let {id}=req.params
    try {
        let data=await Contract_type.find({_id:id});
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostContract_type=async(req,res)=>{
    let {name}=req.body
    try {
        let check=await Contract_type.findOne({name})
        if (check) {
           return res.status(400).send({message:"Such Contract_type exists"})
        }
        let {value,error}=Contract_typeValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newContract_type= new Contract_type(value)
        await newContract_type.save()
        res.send(newContract_type)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchContract_type=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Contract_type.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Contract_type doesn't exists"})
        }
        let {value,error}=Contract_typePatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newContract_type= await Contract_type.findByIdAndUpdate(id,value,{new:true})
        res.send(newContract_type)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelContract_type=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Contract_type.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Contract_type doesn't exists"})
        }
        let newContract_type= await Contract_type.findByIdAndDelete(id)
        res.send(newContract_type)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}