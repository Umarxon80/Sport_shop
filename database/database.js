import { MongoDB } from "../config/configs.js"

import mongoose from "mongoose"

function ConnectDB() {
    mongoose.connect(MongoDB)
    .then(()=>console.log("connected to DB"))
    .catch((e)=>console.log(e))
}

export default ConnectDB