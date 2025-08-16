import { Router } from "express";

const ShopsRouter=Router()

ShopsRouter.get("",(req,res)=>{
    res.send("Shops")
})

export default ShopsRouter