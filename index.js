require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const courseRoutes = require("./routes/courseRoutes");
const logger = require("./middlewares/logger");
const auth = require("./middlewares/auth");

connectDB();

const app = express();

app.use(express.json());
app.use(logger);
app.use(auth);

app.use("/eduka/api/courses", courseRoutes);
const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000...".blue.bold);
});
