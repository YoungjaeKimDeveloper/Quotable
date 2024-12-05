import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();
dotenv.config();
// JSON TYPE 받을수있게 해주기
app.use(express.json());

const PORT = process.env.PORT || 5010;
app.use("/api/quote", productRoutes);
// app.get("/", (req, res) => {
//   res.status(200).json({ success: true, message: "HomePage" });
// });
app.listen(PORT, () => {
  console.log(`Server is Running in ${PORT}`);
  connectDB();
});
