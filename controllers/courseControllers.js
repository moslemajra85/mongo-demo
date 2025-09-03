const Course = require("../models/course");

const getCourses = async (req, res) => {
  try {
    // talk to the database
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    // handle error
    res.send(error);
  }
};

const getCourse = async (req, res) => {
  try {
    const id = req.params.id;

    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).send(`Course with id ${id} not found!`);
    }
    res.send(course);
  } catch (error) {
    res.send(error);
  }
};

const createCourse = async (req, res) => {
  try {
    const course = await Course.insertOne(req.body);
    req.send(course);
  } catch (error) {
    res.send(error);
  }
};

const updateCourse = async (req, res) => {
  try {
    // extract id from  reques object

    const id = req.params.id;

    // check f the course with the provide id exists

    const result = await Course.findByIdAndUpdate(id, req.body);

    // if not exist return 404 request not found
    if (!result) {
      return res.status(404).send(`Course with id ${id} not found!`);
    }

    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Course.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
