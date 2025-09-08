function logger (req, res, next) {
  console.log("Time:", new Date().toString());
  console.log("URL: ", req.originalUrl);
  next();
}

module.exports = logger