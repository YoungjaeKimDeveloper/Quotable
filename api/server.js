import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
const app = express();
dotenv.config();
// JSON TYPE 받을수있게 해주기
app.use(express.json());
const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`Server is Running in ${PORT}`);
  connectDB();
});
