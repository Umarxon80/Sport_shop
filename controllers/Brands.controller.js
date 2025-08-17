import { Brand } from "../models/Brands.js";
import { BrandPatchValidator, BrandValidator } from "../validation/Brands.validator.js";;

    
export const GetBrand=async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    try {
        let data=await Brand.find().skip((page - 1) * limit).limit(limit);
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostBrand=async(req,res)=>{
    let {name}=req.body
    try {
        let check=await Brand.findOne({name})
        if (check) {
           return res.status(400).send({message:"Such brand exists"})
        }
        let {value,error}=BrandValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newbrand= new Brand(value)
        await newbrand.save()
        res.send(newbrand)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchBrand=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Brand.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such brand doesn't exists"})
        }
        let {value,error}=BrandPatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newbrand= await Brand.findByIdAndUpdate(id,value,{new:true})
        res.send(newbrand)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelBrand=async(req,res)=>{
    console.log(true);
    
    let {id}=req.params
    try {
        let check=await Brand.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such brand doesn't exists"})
        }
        let newbrand= await Brand.findByIdAndDelete(id)
        res.send(newbrand)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}