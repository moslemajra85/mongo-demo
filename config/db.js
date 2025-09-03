const mongoose = require("mongoose");
const colors = require("colors");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB...".green.bold);
  } catch (error) {
    console.error("Error connecting to MongoDB:".red.bold, error);
  }
}

module.exports = connectDB;
