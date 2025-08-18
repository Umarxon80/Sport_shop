import express from "express"
import ConnectDB from "./database/database.js"
import { PORT } from "./config/configs.js"
import BrandRouter from "./routes/Brands.routes.js"
import CategoriesRouter from "./routes/Categories.routes.js"
import Contract_typesRouter from "./routes/Contract_types.routes.js"
import ContractsRouter from "./routes/Contract.routes.js"
import PaymentsRouter from "./routes/Payments.routes.js"
import ProductsRouter from "./routes/Products.routes.js"
import ShopsRouter from "./routes/Shops.routes.js"
import CustomersRouter from "./routes/Costumers.routes.js"
import searchRouter from "./routes/search.routes.js"

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


const app=express()

app.use(express.json())
app.use("/files", express.static(__dirname + "/upload"));

app.use("/brands", BrandRouter)
app.use("/categories", CategoriesRouter)
app.use("/contract_types", Contract_typesRouter)
app.use("/customers", CustomersRouter)
app.use("/contracts", ContractsRouter)
app.use("/payments", PaymentsRouter)
app.use("/products", ProductsRouter)
app.use("/shops", ShopsRouter)
app.use("/search",searchRouter)

app.listen(PORT,()=>{
    console.log(`Server is on http://localhost:${PORT}`);
    ConnectDB()
})