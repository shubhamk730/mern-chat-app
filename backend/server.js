const express = require("express");
const chats = require("./data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res, err) => {
  res.json({ Welcome: "Hellooooooo" });
});

app.get("/api/chat", (req, res, err) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res, err) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  console.log(singleChat);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server started`.yellow.bold);
});
