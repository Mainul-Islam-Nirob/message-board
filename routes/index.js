const express = require("express");
const router = express.Router();
const db = require("../db");


// Index Route
router.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages });
});

// Form Route (GET)
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Form Submission (POST)
router.post("/new", async(req, res) => {
  const { messageUser, messageText } = req.body;
  await db.createMessage(messageUser, messageText);
  res.redirect("/");
});

// Message Details
router.get("/message/:id", async(req, res) => {
  const message = await db.getMessageById(req.params.id);
  if (!message) return res.status(404).send("Message not found.");
  res.render("message", { title: "Message Detail", message });
});

module.exports = router;
