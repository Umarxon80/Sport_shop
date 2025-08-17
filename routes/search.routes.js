import { Router } from "express";
import { debters, logs } from "../controllers/search.controller.js";

const searchRouter=Router()

searchRouter.get("",debters)
searchRouter.post("",logs)
export default searchRouter