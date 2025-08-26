const mongoose = require("mongoose");
const colors = require("colors");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://moslem2020:123moslem@cluster0.6hprc.mongodb.net/school"
    );

    console.log("Connected to MongoDB...".green.bold);
  } catch (error) {
    console.error("Error connecting to MongoDB:".red.bold, error);
  }
}

module.exports = connectDB;