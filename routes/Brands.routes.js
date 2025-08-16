import { Router } from "express";
import { GetBrand } from "../controllers/Brands.controller.js";

const BrandsRouter=Router()

BrandsRouter.get("",GetBrand)

export default BrandsRouter