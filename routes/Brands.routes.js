import { Router } from "express";
import { DelBrand, GetBrand, PatchBrand, PostBrand } from "../controllers/Brands.controller.js";

const BrandsRouter=Router()

BrandsRouter.get("",GetBrand)
BrandsRouter.post("",PostBrand)
BrandsRouter.patch("/:id", PatchBrand)
BrandsRouter.delete("/:id", DelBrand)
export default BrandsRouter