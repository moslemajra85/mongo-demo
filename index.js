const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
//connectDB();

const courses = [
  {
    title: "Course 1",
    price: 10,
    releaseDate: new Date(2023, 1, 1),
    isPublished: true,
  },
  {
    title: "Course 2",
    price: 15,
    releaseDate: new Date(2023, 2, 1),
    isPublished: true,
  },
  {
    title: "Course 3",
    price: 20,
    releaseDate: new Date(2023, 3, 1),
    isPublished: false,
  },
  {
    title: "Course 4",
    price: 25,
    releaseDate: new Date(2023, 4, 1),
    isPublished: true,
  },
  {
    title: "Course 5",
    price: 30,
    releaseDate: new Date(2023, 5, 1),
    isPublished: false,
  },
  {
    title: "Course 6",
    price: 35,
    releaseDate: new Date(2023, 6, 1),
    isPublished: true,
  },
];

const app = express();

app.get("/eduka/api/courses", (req, res) => {
  res.send(courses);
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000...".blue.bold);
});
