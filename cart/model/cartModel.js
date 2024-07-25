const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: {
    type: [mongoose.Schema.ObjectId],
    ref: "product",
  },
});
