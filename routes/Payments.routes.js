import { Router } from "express";
import { DelPayment, GetPayment, PatchPayment, Pay, PostPayment } from "../controllers/Payments.controller.js";

const PaymentsRouter=Router()

PaymentsRouter.get("",GetPayment)
PaymentsRouter.patch("/pay/:id",Pay)
PaymentsRouter.post("/",PostPayment)
PaymentsRouter.patch("/:id",PatchPayment)
PaymentsRouter.delete("/:id",DelPayment)

export default PaymentsRouter