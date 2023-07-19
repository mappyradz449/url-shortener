import { linkModel } from "@/models/Link";
import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb://maha:maha123@ac-nmkevhb-shard-00-00.z3uiiy7.mongodb.net:27017,ac-nmkevhb-shard-00-01.z3uiiy7.mongodb.net:27017,ac-nmkevhb-shard-00-02.z3uiiy7.mongodb.net:27017/?ssl=true&replicaSet=atlas-1bhyak-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectMongo = async () => mongoose.connect(MONGODB_URI);

export default connectMongo;
