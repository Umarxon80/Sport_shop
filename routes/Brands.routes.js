import { Router } from "express";
import { DelBrand, GetBrand, GetOneBrand, PatchBrand, PostBrand } from "../controllers/Brands.controller.js";

const BrandsRouter=Router()

BrandsRouter.get("",GetBrand)
BrandsRouter.get("/:id",GetOneBrand)
BrandsRouter.post("",PostBrand)
BrandsRouter.patch("/:id", PatchBrand)
BrandsRouter.delete("/:id", DelBrand)
export default BrandsRouter