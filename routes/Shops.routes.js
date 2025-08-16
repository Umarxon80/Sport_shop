import { Router } from "express";
import { DelShop, GetShop, PatchShop, PostShop } from "../controllers/Shops.controller.js";

const ShopsRouter=Router()

ShopsRouter.get("",GetShop)
ShopsRouter.post("",PostShop)
ShopsRouter.patch("/:id",PatchShop)
ShopsRouter.delete("/:id",DelShop)

export default ShopsRouter