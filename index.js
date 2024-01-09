var express = require("express");
var app = express();
const port = 5000;
const { User } = require("./models/User");

const config = require("./config/key");

app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); //application/x-www-form-urlencoded

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// respond with "hello world" when a GET request is made to the homepage

app.get("/", (req, res) => res.send("Hello World! 할룽 잘되고 있나 잘됐니???"));

// 회원가입 할 때 필요한 정보들을 client에서 가져오면
// 그것들을 데이터 베이스에 넣어준다.
app.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        success: false,
        err: err,
      });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
