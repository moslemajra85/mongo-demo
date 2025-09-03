const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = require("./config/db");
const { update } = require("lodash");
connectDb();

// create the scheme
const mongooseSchema = new mongoose.Schema({
  title: String,
  instuctor: String,
  price: Number,
  isPublished: Boolean,
});

// create Model
const Course = mongoose.model("Course", mongooseSchema);

async function insertCourse(title, instuctor, price, isPublished) {
  try {
    const course = new Course({
      title,
      instuctor,
      price,
      isPublished,
    });

    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

async function getCourses() {
  try {
    const courses = await Course.find();
    console.log(courses);
  } catch (error) {
    console.log(error);
  }
}

//getCourses();

async function getCourse() {
  try {
    //  const result  = await Course.find({

    //    instuctor: "Moslem Ajra"
    //   })

    const result = await Course.find({
      _id: "68b5c57b12c0ca9de484602f",
    });
    console.log(result);
  } catch (error) {}
}

//getCourse();

async function getCourseById(id) {
  try {
    const result = await Course.findById(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//getCourseById("68b5c57b12c0ca9de484602c");

async function updateCourseById(id, updatedData) {
  try {
    const result = await Course.findByIdAndUpdate(id, updatedData);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// updateCourseById("68b5c57b12c0ca9de4846032", {
//   price: 40,
//   isPublished: false,

// });

async function deleteCourseById(id) {
  try {
    const result = await Course.findByIdAndDelete(id);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//deleteCourseById("68b5c0bf77a21b681b749a76");
