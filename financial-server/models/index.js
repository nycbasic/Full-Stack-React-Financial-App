const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promises = Promise;
mongoose.connect(
  "mongodb://localhost/financial-management",
  {
    keepAlive: true
  }
);

module.exports.Expenses = require("./expenses");
