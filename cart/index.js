const express = require("express");
const cartRouter = require("./router/cartRouter");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(cartRouter);

mongoose
  .connect("mongodb://mongo:27017/ecommers")
  .then(() => {
    console.log("database is conneted");
  })
  .catch(() => {
    console.log("database is not connected");
  });

app.listen(6000, () => {
  console.log("app is listeting to 6000");
});
