import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;

if (!uri) throw new Error("Please define the MONGODB_URI environment variable");

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri);
clientPromise = client.connect();

if (process.env.NODE_ENV !== "development") {
  // todo
} else {
  // todo
}

export default clientPromise;
