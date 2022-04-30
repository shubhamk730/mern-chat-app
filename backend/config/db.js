const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO CONNECTED : ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
