import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGOURL = process.env.MONGO_URL;
  try {
    await mongoose.connect(MONGOURL);
    console.info("✅ DATA CONNECTED");
  } catch (error) {
    console.error("📍ERROR IN CONNECTING DB: ", error.message);
  }
};
