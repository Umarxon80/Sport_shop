import {Shop} from "../models/Shops.js"
import { ShopPatchValidator, ShopValidator } from "../validation/Shops.validator.js"


export const GetShop=async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    try {
        let data=await Shop.find().skip((page - 1) * limit).limit(limit);
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostShop=async(req,res)=>{
    let {name}=req.body
    try {
        let check=await Shop.findOne({name})
        if (check) {
           return res.status(400).send({message:"Such Shop exists"})
        }
        let {value,error}=ShopValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newShop= new Shop(value)
        await newShop.save()
        res.send(newShop)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchShop=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Shop.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Shop doesn't exists"})
        }
        let {value,error}=ShopPatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newShop= await Shop.findByIdAndUpdate(id,value,{new:true})
        res.send(newShop)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelShop=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Shop.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Shop doesn't exists"})
        }
        let newShop= await Shop.findByIdAndDelete(id)
        res.send(newShop)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}