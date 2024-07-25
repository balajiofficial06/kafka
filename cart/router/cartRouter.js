const express = require("express");
const catchAsync = require("../utils/catchAsync");
const { AppError } = require("../utils/AppError");

const router = express.Router();

router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    console.log(req.params);
    res.send("the cart has");
  })
);

module.exports = router;
