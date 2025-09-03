require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const Course = require("./models/course");
connectDB();

const app = express();

;
const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000...".blue.bold);
});
