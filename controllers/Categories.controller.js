import { Category } from "../models/Categories.js";
import { CategoryPatchValidator, CategoryValidator } from "../validation/Categories.validator.js";


export const GetCategory=async (req,res)=>{
    try {
        let data=await Category.find()
        res.send(data)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PostCategory=async(req,res)=>{
    let {name}=req.body
    try {
        let check=await Category.findOne({name})
        if (check) {
           return res.status(400).send({message:"Such Category exists"})
        }
        let {value,error}=CategoryValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newCategory= new Category(value)
        await newCategory.save()
        res.send(newCategory)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const PatchCategory=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Category.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Category doesn't exists"})
        }
        let {value,error}=CategoryPatchValidator.validate(req.body)
        if (error) {
           return res.send(error.details[0].message)
        }
        let newCategory= await Category.findByIdAndUpdate(id,value,{new:true})
        res.send(newCategory)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

export const DelCategory=async(req,res)=>{
    let {id}=req.params
    try {
        let check=await Category.findOne({_id:id})
        if (!check) {
           return res.status(400).send({message:"Such Category doesn't exists"})
        }
        let newCategory= await Category.findByIdAndDelete(id)
        res.send(newCategory)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}