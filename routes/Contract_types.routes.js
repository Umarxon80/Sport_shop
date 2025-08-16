import { Router } from "express";

const Contract_typesRouter=Router()

Contract_typesRouter.get("",(req,res)=>{
    res.send("Contract_types")
})

export default Contract_typesRouter