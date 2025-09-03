require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const courseRoutes = require("./routes/courseRoutes");
connectDB();

const app = express();

app.use("/eduka/api/courses", courseRoutes);
const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000...".blue.bold);
});
