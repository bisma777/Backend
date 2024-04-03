import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MONGODB connected !! DB host: ${connectionInstance}`);
  } catch (error) {
    console.log("MONGO DB ERROR", error);
    process.exit(1); // Force the application to exit if MongoDB
  }
};
export default connectDB;
