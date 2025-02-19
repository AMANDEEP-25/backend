//require("dotenv").config();

import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB();

/*// it is an effiy used to declare and call a function all together
(async () => {
    try {
        mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("ERROR ", error)
        throw error
    }
})()
*/
