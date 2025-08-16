import mongoose from "mongoose";

const ShopSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:1,
        required:true,
        unique: true
    },
    adress:{
        type:String,
        required:true
    },
    contact_number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
export const Shop = mongoose.model("Shop", ShopSchema);