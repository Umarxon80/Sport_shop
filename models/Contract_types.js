import mongoose from "mongoose";

const Contract_typeSchema= new mongoose.Schema({
    months:{
        type:Number,
        enum:[5,10,15],
        required:true
    },
    percentage:{
        type:Number,
        enum:[26,41,52],
        required:true
    }
})
export const Contract_type = mongoose.model("Contract_type", Contract_typeSchema);