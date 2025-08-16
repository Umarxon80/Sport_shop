import { Router } from "express";

const ContractsRouter=Router()

ContractsRouter.get("",(req,res)=>{
    res.send("Contracts")
})

export default ContractsRouter