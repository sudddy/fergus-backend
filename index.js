const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

// Import the mongoose module
const mongoose = require("mongoose");
const mongoDB = "mongodb://db:27017/fergus"; // Admin access is provided
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const jobRouter = require("./Services/Jobs/index");
app.use("/", jobRouter);

app.listen(8080, () => {
  console.log("Listenning on port 8080");
});
