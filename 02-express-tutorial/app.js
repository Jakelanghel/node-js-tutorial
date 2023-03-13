const express = require("express");
const app = express();
const logger = require("./logger.js");
import authorize from "./authorize.js";

app.get("/", logger, (req, res) => {
  res.send("HOME");
});
app.get("/about", logger, (req, res) => {
  res.send("ABOUT");
});

app.listen(5000, () => {
  console.log("server is listening on port 50000...");
});
