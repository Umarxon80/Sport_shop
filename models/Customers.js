import mongoose from "mongoose";

const CustomerSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:1,
        required:true,
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
    },
    passport:{
        type:String,
        required:true
    }
})
export const Customer = mongoose.model("Customer", CustomerSchema);