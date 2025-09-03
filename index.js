require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const Course = require("./models/course");
connectDB();

const app = express();

app.use(express.json());

app.get("/eduka/api/courses", async (req, res) => {
  try {
    // talk to the database
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    // handle error
  res.send(error)
  }
});

app.get("/eduka/api/courses/:id", (req, res) => {
  // extract the id from the request object

  const id = +req.params.id;
  // check if there is a course with the provided id
  const course = courses.find((course) => course.id === id);

  // if course exist , we return the course
  if (!course) {
    return res.status(404).send(`Course with id ${id} not found!`);
  }

  res.send(course);
});

app.post("/eduka/api/courses", (req, res) => {
  courses.push({
    id: courses.length + 1,
    ...req.body,
  });

  res.send("Success!");
});

app.put("/eduka/api/courses/:id", (req, res) => {
  // extract id from  reques object

  const id = +req.params.id;

  // check f the course with the provide id exists
  let course = courses.find((course) => course.id === id);

  // if not exist return 404 request not found
  if (!course) {
    return res.status(404).send(`Course with id ${id} not found!`);
  }
  // otherwise update course
  courses = courses.map((course) =>
    course.id === id ? { ...course, ...req.body } : course
  );

  res.send("Success!");
});

app.delete("/eduka/api/courses/:id", (req, res) => {
  // look for the course

  const course = courses.find((course) => course.id === +req.params.id);

  if (!course) {
    return res.status(404).send(`Course with id ${id} not found!`);
  }

  courses = courses.filter((course) => course.id !== +req.params.id);
  res.send("Success!");
});
const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000...".blue.bold);
});
