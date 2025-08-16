import { Router } from "express";

const ProductsRouter=Router()

ProductsRouter.get("",(req,res)=>{
    res.send("Products")
})

export default ProductsRouter