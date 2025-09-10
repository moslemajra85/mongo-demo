const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
