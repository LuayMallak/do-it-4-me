const { Schema, model } = require("mongoose");

const ProviderDetailsSchema = new Schema({
  availability: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

module.exports = model("ProviderDetails", ProviderDetailsSchema);
