import { Router } from "express";
import { DelContract_type, GetContract_type, PatchContract_type, PostContract_type } from "../controllers/Contract_types.controller.js";

const Contract_typesRouter=Router()

Contract_typesRouter.get("", GetContract_type)
Contract_typesRouter.post("", PostContract_type)
Contract_typesRouter.patch("/:id", PatchContract_type)
Contract_typesRouter.delete("/:id", DelContract_type)

export default Contract_typesRouter