import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login");
});

router.post("/logout", (req, res) => {
  res.send("Logout");
});

router.post("/signup", (req, res) => {
  res.send("Signup");
});

export default router;
