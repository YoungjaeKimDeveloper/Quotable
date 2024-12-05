import express from "express";
import { Quote } from "../models/Quote.js";
import mongoose from "mongoose";
const router = express.Router();
// 백엔드에서 어떤 요청을 내보내줄지 해줘야함
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
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "CANNOT FIND THE ITEM" });
    }
    const updatedData = req.body;
    const updatedItem = await Quote.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (updatedItem == null) {
      console.error("CANNOT FIND THE ITEM TO UPDATE");
      return res
        .status(400)
        .json({ success: false, message: "CANNOT FIND THE UPDATED ITEM" });
    }
    return res.status(200).json({
      success: true,
      message: "SUCCEED IN UPDATING ITEM",
      updatedItem: updatedItem,
    });
  } catch (error) {
    console.error("ERROR IN UPDATING ITEM: ", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
});
// Quote Update하기
// 이 경로로 들어오면 이렇게해주세요~
// 아이템 지워주기
router.delete("/:id", async (req, res) => {
  try {
    // 요청받은거니까 req
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "CANNOT FIND THE ITEM" });
    }
    const deletedItem = await Quote.findByIdAndDelete(id);
    if (!deletedItem) {
      return res
        .status(400)
        .json({ success: false, message: "CANNOT FIND THE ITEM" });
    }
    console.info("SUCCED IN DELETING ITEM");

    return res.status(200).json({
      success: true,
      message: "SUCCEED IN DELETING ITEM",
      deletedItem: deletedItem,
    });
  } catch (error) {
    console.error("FAILED IN DELETING ITEM : ", error.message);
    return res.status(400).json({
      success: false,
      message: "FAILED IN DELETING ITEM :" + error.message,
    });
  }
});

export default router;
