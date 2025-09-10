const { required } = require("joi");
const mongoose = require("mongoose");

// create the scheme
const mongooseSchema = new mongoose.Schema({
  title: String,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  price: Number,
  isPublished: Boolean,
});

// create Model
const Course = mongoose.model("Course", mongooseSchema);

module.exports = Course;
