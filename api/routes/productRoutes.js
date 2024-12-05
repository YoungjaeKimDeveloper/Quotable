import express from "express";
import { Quote } from "../models/Quote.js";
const router = express.Router();

// 새로운 Quote를 만드는 함수
router.post("/create", async (req, res) => {
  try {
    const data = req.body;
    const { title, author, image } = data;
    // 데이터가 비는경우
    if (!title || !author || !image) {
      return res
        .status(400)
        .json({ success: false, message: "Please Fill up the forms" });
    }
    const newQuote = await Quote.create(data);
    // 서버에서 실제로 내보내는 데이터 받는 데이터를 맞게 맞춰줘야함
    console.info("NEW QUOTE HAS BEEN CREATED : ", newQuote);
    return res.status(200).json({ success: true, newQuote: newQuote });
  } catch (error) {
    console.error("FAILED TO CREATE NEW QUOTE: ", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
});
// Quote 가져오기
router.get("/quotes", async (req, res) => {
  try {
    const quotes = await Quote.find({});
    if (quotes.length === 0) {
      console.error("THERE IS NO QUOTE");
      return res.status(400).json({ success: false, message: "NO QUOTES" });
    }
    return res.status(200).json({ success: true, quotes: quotes });
  } catch (error) {
    console.error("FAILED TO GET QUOTES: ", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
