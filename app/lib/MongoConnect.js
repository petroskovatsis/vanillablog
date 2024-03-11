import { MongoClient } from "mongodb";

export const connect = async (database) => {
  const options = {};
  const mongoClient = new MongoClient(process.env.MONGODB_URI, options);;
  const clientConnect = await mongoClient.connect();
  return clientConnect.db(database);
}
