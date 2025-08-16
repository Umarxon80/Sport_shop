import { Router } from "express";

const BrandsRouter=Router()

BrandsRouter.get("",(req,res)=>{
    res.send("Brands")
})

export default BrandsRouter