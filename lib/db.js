import { linkModel } from "@/models/Link";
import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URI =
  "mongodb+srv://maha:maha123@link-cut.z3uiiy7.mongodb.net/?retryWrites=true&w=majority";

const connectMongo = async () => mongoose.connect(MONGODB_URI);

export default connectMongo;
