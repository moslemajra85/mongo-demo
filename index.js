const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
//connectDB();

let courses = [
  {
    id: 1,
    title: "Course 1",
    price: 10,
    releaseDate: new Date(2023, 1, 1),
    isPublished: true,
  },
  {
    id: 2,
    title: "Course 2",
    price: 15,
    releaseDate: new Date(2023, 2, 1),
    isPublished: true,
  },
  {
    id: 3,
    title: "Course 3",
    price: 20,
    releaseDate: new Date(2023, 3, 1),
    isPublished: false,
  },
  {
    id: 4,
    title: "Course 4",
    price: 25,
    releaseDate: new Date(2023, 4, 1),
    isPublished: true,
  },
  {
    id: 5,
    title: "Course 5",
    price: 30,
    releaseDate: new Date(2023, 5, 1),
    isPublished: false,
  },
  {
    id: 6,
    title: "Course 6",
    price: 35,
    releaseDate: new Date(2023, 6, 1),
    isPublished: true,
  },
];

const app = express();

app.use(express.json());

app.get("/eduka/api/courses", (req, res) => {
  res.send(courses);
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
