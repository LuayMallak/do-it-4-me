const { Schema, model } = require("mongoose");

const DealSchema = new Schema({
  searcher: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    trim: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    trim: true,
  },
  dealDate: {
    type: Date,
    required: true,
  },
  dealService: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    required: true,
    trim: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  canceled: {
    type: Boolean,
    default: false,
  },
  rated: {
    type: Boolean,
    default: false,
  },
  time: {
    type: Array,
    required: true,
  },
  note: {
    type: String,
  },
});

DealSchema.method("toJSON", function () {
  return {
    _id: this._id,
    searcher: this.searcher,
    provider: this.provider,
    dealDate: this.dealDate,
    dealService: this.dealService,
    approved: this.approved,
    canceled: this.canceled,
    time: this.time,
    note: this.note,
    rated: this.rated,
  };
});

module.exports = model("Deal", DealSchema);
