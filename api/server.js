import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";

const app = express();
dotenv.config();
// JSON TYPE 받을수있게 해주기
app.use(express.json());

const PORT = process.env.PORT || 5010;

const __dirname = path.resolve();

app.use("/api/quote", productRoutes);
// app.get("/", (req, res) => {
//   res.status(200).json({ success: true, message: "HomePage" });
// });
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server is Running in ${PORT}`);
  connectDB();
});
