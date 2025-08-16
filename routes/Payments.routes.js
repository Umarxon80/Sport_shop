import { Router } from "express";

const PaymentsRouter=Router()

PaymentsRouter.get("",(req,res)=>{
    res.send("Payments")
})

export default PaymentsRouter