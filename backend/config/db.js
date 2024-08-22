import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGODB_URI)
   
  } catch (error) {
    
    process.exit(1)
  }
}
