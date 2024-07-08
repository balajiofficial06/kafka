const express = require("express");
const productModel = require("../model/productModel");
const catchAsync = require("../utils/catchAsync");
const { AppError } = require("../utils/AppError");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   console.log(req);
//   res.send("Home page");
// });

router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const result = await productModel.findById(req.params.id);
    res.json({ data: result, statusCode: 200 });
    return;
  })
);

router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const result = await productModel.find();
    res.json({ data: result, statuCode: 200 });
  })
);

router.post(
  "/",
  catchAsync(async (req, res, next) => {
    const productObj = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
    };

    const result = await productModel.create(productObj);

    if (!result) {
      next(AppError("Details are missing", 400));
    }
    res.status(200).json({ data: result });
  })
);

module.exports = router;
