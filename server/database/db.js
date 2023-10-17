import mongoose from "mongoose";
import { Server } from "../utils/config.js";

const connectDB = async () => {
  try {
    console.log(Server.MONGO_URI);
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(Server.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
