import { Router } from "express";
import { DelCustomer, GetCustomer, GetOneCustomer, PatchCustomer, PostCustomer } from "../controllers/Costumers.controller.js";

const CustomersRouter=Router()

CustomersRouter.get("",GetCustomer)
CustomersRouter.get("/:id",GetOneCustomer)
CustomersRouter.post("",PostCustomer)
CustomersRouter.patch("/:id",PatchCustomer)
CustomersRouter.delete("/:id",DelCustomer)

export default CustomersRouter