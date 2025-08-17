import mongoose from "mongoose";

const PaymentSchema= new mongoose.Schema({
    check_numb:{
        type:Number,
        minlength:1,
        required:true,
        unique:true
    },
    sum:{
        type:Number,
        min:1,
        required:true
    },
    contract_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Contract",
        required:true
    },   
    status:{
        type:Boolean,
        default:false,
    },
    type:{
        type:String,
        enum:["Cash","Card"]
    }
},{ timestamps: true });

export const Payment = mongoose.model("Payment", PaymentSchema);