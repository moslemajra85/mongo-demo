const mongoose = require('mongoose')

// create the scheme
const mongooseSchema = new mongoose.Schema({
  title: String,
  instuctor: String,
  price: Number,
  isPublished: Boolean,
});

// create Model
const Course = mongoose.model("Course", mongooseSchema);


module.exports = Course;