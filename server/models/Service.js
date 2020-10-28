const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema({
  value: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("Service", ServiceSchema);
