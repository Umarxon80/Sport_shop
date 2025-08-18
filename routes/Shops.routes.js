import { Router } from "express";
import { DelShop, GetOneShop, GetShop, PatchShop, PostShop } from "../controllers/Shops.controller.js";

const ShopsRouter=Router()

ShopsRouter.get("",GetShop)
ShopsRouter.get("/:id",GetOneShop)
ShopsRouter.post("",PostShop)
ShopsRouter.patch("/:id",PatchShop)
ShopsRouter.delete("/:id",DelShop)

export default ShopsRouter