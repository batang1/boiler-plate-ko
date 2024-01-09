var express = require("express");
var app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://j0164775399:j1234@boilerplate.qkar0um.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

// respond with "hello world" when a GET request is made to the homepage

app.get("/", (req, res) => res.send("Hello World! 할룽"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
