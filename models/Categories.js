import { required } from "joi";
import mongoose from "mongoose";

const CategorySchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:1,
        required:true,
        unique: true
    }
})
export const Category = mongoose.model("Category", CategorySchema);