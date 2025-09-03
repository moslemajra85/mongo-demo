const express = require("express");
const Router = express.Router();

const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseControllers");

Router.get("/", getCourses);
Router.get("/:id", getCourse);
Router.post("/", createCourse);
Router.put("/:id", updateCourse);
Router.delete("/:id", deleteCourse);

module.exports = Router;
