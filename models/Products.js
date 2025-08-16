import mongoose from "mongoose";

const ProductSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:1,
        required:true
    },
    shop_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
        required:true
    },
    brand_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        required:true
    },
    price:{
        type:Number,
        min:0.1,
        required:true
    },
    desc:{
        type:String,
        maxlength:1000,
    },
    isnew:{
        type:Boolean,
        required:true,
        default:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    img:{
        type:String,
        required:true
    }
})
export const Product = mongoose.model("Product", ProductSchema);