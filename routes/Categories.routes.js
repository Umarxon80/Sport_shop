import { Router } from "express";
import { DelCategory, GetCategory, GetOneCategory, PatchCategory, PostCategory } from "../controllers/Categories.controller.js";

const CategoriesRouter=Router()

CategoriesRouter.get("",GetCategory)
CategoriesRouter.get("/:id",GetOneCategory)
CategoriesRouter.post("",PostCategory)
CategoriesRouter.patch("/:id",PatchCategory)
CategoriesRouter.delete("/:id",DelCategory)

export default CategoriesRouter