import { Router } from "express";
import { DelCustomer, GetCustomer, PatchCustomer, PostCustomer } from "../controllers/Costumers.controller.js";

const CustomersRouter=Router()

CustomersRouter.get("",GetCustomer)
CustomersRouter.post("",PostCustomer)
CustomersRouter.patch("/:id",PatchCustomer)
CustomersRouter.delete("/:id",DelCustomer)

export default CustomersRouter