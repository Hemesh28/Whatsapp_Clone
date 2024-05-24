import mongoose from "mongoose";

const Connection = () => {
  const URL =
    "mongodb://Hemesh28:Hemesh@ac-1z88y61-shard-00-00.39dybtg.mongodb.net:27017,ac-1z88y61-shard-00-01.39dybtg.mongodb.net:27017,ac-1z88y61-shard-00-02.39dybtg.mongodb.net:27017/?ssl=true&replicaSet=atlas-zcw245-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp-clone";
  try {
    mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting to Database", error.message);
  }
};
export default Connection;
