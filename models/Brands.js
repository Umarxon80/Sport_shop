import mongoose from "mongoose";

const BrandSchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:1,
        required:true,
        unique: true
    }
})
export const Brand = mongoose.model("Brand", BrandSchema);