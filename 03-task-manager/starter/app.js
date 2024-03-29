const express = require("express");
const app = express();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// middleware
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();
