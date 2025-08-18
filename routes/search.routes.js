import { Router } from "express";
import { debters, logs } from "../controllers/search.controller.js";

const searchRouter=Router()

searchRouter.get("/debters",debters)
searchRouter.post("/logs",logs)
export default searchRouter