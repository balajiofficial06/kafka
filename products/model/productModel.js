const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },

  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },

  category: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
});

const prodcutModel = mongoose.model("products", productSchema);

module.exports = prodcutModel;
