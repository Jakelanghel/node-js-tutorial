const mongoose = require("mongoose");

const connectionsString = `mongodb+srv://jake:RiWTk3AYHg9NFyCZ@nodeexpressprojects.fsvzbrg.mongodb.net/03-task-manager?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose
    .connect(connectionsString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("CONNECTED TO SERVER..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
