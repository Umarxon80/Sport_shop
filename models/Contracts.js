import mongoose from "mongoose";

const ContractSchema= new mongoose.Schema({
    contract_number:{
        type:String,
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer",
        required:true
    },
    contract_type_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Contract_type",
        required:true
    },
    date:{
        type: Date,
        default: Date.now },
    end_date:{
         type: Date 
    },
    shop_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
        required:true
    },
    debt:{
        type:Number,
        min:0,
    },
    first_payment:{
        type:Number,
        required:true
    },
    paid:{
        type:Number, 
    }
},{timestamps:true})
export const Contract = mongoose.model("Contract", ContractSchema);