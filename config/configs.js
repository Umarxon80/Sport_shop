import  dotenv  from "dotenv";

dotenv.config({ quiet: true });


export const PORT=process.env.PORT
export const MongoDB=process.env.MongoDB
export const LINK=process.env.LINK