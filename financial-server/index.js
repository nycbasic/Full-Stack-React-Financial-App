const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  app = express(),
  errorHandler = require("./helpers/error");

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on: ${PORT}`);
});
