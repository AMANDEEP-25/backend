import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(`mongo db connected !! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MONGO DB ERROR ", error);
    process.exit(1);
  }
};

export default connectDB;
