import { Brand } from "../models/Brands.js";


export const GetBrand=async (req,res)=>{
    try {
        let data=await Brand.find()
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
        
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}