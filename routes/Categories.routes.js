import { Router } from "express";

const CategoriesRouter=Router()

CategoriesRouter.get("",(req,res)=>{
    res.send("Categories")
})

export default CategoriesRouter