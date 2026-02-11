import express from "express";

const router = express.Router();

router.post("/conversation", (req, res) => {
  res.send("Conversation");
});

export default router;
