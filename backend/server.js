const express = require("express");
const chats = require("./data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json()); //to accept json data

app.get("/", (req, res, next) => {
  res.json({ Welcome: "Hello api is running successfully" });
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started`.yellow.bold);
});
