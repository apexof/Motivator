const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema;

const operations = mongoose.model(
  "operations",
  new Schema(
    {
      from_id: { type: ObjectId, required: true },
      from_type: { type: String, required: true },
      to_id: { type: ObjectId, required: true },
      to_type: { type: String, required: true },
      amount: { type: Number, required: true },
      date: { type: Date, required: true },
      tag: { type: String },
      comment: { type: String }
    },
    { collection: "operations" }
  )
);

module.exports = { operations };
