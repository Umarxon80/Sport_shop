import { Router } from "express";
import { upload } from "../middleware/upload.js";
import { DelProduct, GetOneProduct, GetProduct, PatchProduct, PatchProductphoto, PostProduct } from "../controllers/Products.controller.js";

const ProductsRouter=Router()

ProductsRouter.get("",GetProduct)
ProductsRouter.get("/:id",GetOneProduct)
ProductsRouter.post("",upload.single("img"), PostProduct)
ProductsRouter.patch("/:id", PatchProduct)
ProductsRouter.patch("/photo/:id",upload.single("img"),PatchProductphoto)
ProductsRouter.delete("/:id",DelProduct)

export default ProductsRouter