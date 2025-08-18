import { Router } from "express";
import { DelContract, GetContract, GetOneContract, PatchContract, PostContract } from "../controllers/Contract.controller.js";

const ContractsRouter=Router()

ContractsRouter.get("",GetContract)
ContractsRouter.get("/:id",GetOneContract)
ContractsRouter.post("",PostContract)
ContractsRouter.patch("/:id",PatchContract)
ContractsRouter.delete("/:id",DelContract)

export default ContractsRouter