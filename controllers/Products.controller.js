import { fileURLToPath } from "url";
import {Product} from "../models/Products.js";
import { ProductPatchValidator, ProductValidator } from "../validation/Products.validator.js";
import { LINK } from "../config/configs.js";


export const GetProduct=async (req,res)=>{
    let { page = 1, limit = 10 } = req.query;
    try {
        let data=await Product.find().populate("brand_id").populate("category_id").populate("shop_id").skip((page - 1) * limit).limit(limit);
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}


export const GetOneProduct=async (req,res)=>{
    let {id}=req.params
    try {
        let data=await Product.find({_id:id}).populate("brand_id").populate("category_id").populate("shop_id");
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostProduct=async(req,res)=>{
    let filename = `${LINK}${req.file.filename}`;
    let body={...req.body, img:filename}
    try {
        let {value,error}=ProductValidator.validate(body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newProduct= new Product(value)
        await newProduct.save()
        res.send(newProduct)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchProductphoto=async(req,res)=>{
    let {id}=req.params    
    let filename = `${LINK}${req.file.filename}`;
    let body={...req.body, img:filename}
    try {
        let check=await Product.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Product doesn't exists"})
        }
        let {value,error}=ProductPatchValidator.validate(body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newProduct= await Product.findByIdAndUpdate(id,value,{new:true})
        res.send(newProduct)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchProduct=async(req,res)=>{
    let {id}=req.params    
    try {
        let check=await Product.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Product doesn't exists"})
        }
        let {value,error}=ProductPatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newProduct= await Product.findByIdAndUpdate(id,value,{new:true})
        res.send(newProduct)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelProduct=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Product.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Product doesn't exists"})
        }
        let newProduct= await Product.findByIdAndDelete(id)
        res.send(newProduct)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}