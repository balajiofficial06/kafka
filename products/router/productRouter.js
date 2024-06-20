const express = require("express");
const productModel = require("../model/productModel");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   console.log(req);
//   res.send("Home page");
// });

router.get("/:id", async (req, res, next) => {
  const result = await productModel.findById(req.params.id);
  console.log(result);
  res.send("product is sent");
  return;
});

router.post("/", (req, res, next) => {});

module.exports = router;
