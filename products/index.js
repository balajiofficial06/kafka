const express = require("express");
const productRouter = require("./router/productRouter");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(productRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommers")
  .then(() => {
    console.log("database is conneted");
  })
  .catch(() => {
    console.log("database is not connected");
  });

app.listen(5000, () => {
  console.log("app is listeting to 5000");
});
