import { Router } from "express";

const CustomersRouter=Router()

CustomersRouter.get("",(req,res)=>{
    res.send("Customers")
})

export default CustomersRouter