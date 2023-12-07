const mongoose = require("mongoose");

const carsSchema = mongoose.Schema({
  model: { type: String },
  type: { type: String },
  color: { type: String },
  brand: { type: String },
  price: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Cars", carsSchema);
