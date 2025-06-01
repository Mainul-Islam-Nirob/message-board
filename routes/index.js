const express = require("express");
const router = express.Router();

const messages = [
  { text: "Welcome to mini message board!", user: "Ridoy", added: new Date() },
  { text: "Hello World!!", user: "Nirob", added: new Date() }
];

// Index Route
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

// Form Route (GET)
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Form Submission (POST)
router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

// Message Details
router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) return res.status(404).send("Message not found.");
  res.render("message", { title: "Message Detail", message });
});

module.exports = router;
