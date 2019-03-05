const mongoose = require("mongoose");
const Float = require("mongoose-float").loadType(mongoose, 10);
const { INCOMES, WALLETS, COSTS } = require("../../constants");

const incomes = mongoose.model(
  INCOMES,
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      plan: { type: Number },
      disable: { type: Boolean },
      model: { type: String, required: true },
      color: { type: String, required: true }
    },
    { collection: INCOMES }
  )
);

const wallets = mongoose.model(
  WALLETS,
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      plan: { type: Number },
      amount: { type: Float, required: true },
      balance: { type: Boolean },
      disable: { type: Boolean },
      model: { type: String, required: true }
    },
    { collection: WALLETS }
  )
);

const costs = mongoose.model(
  COSTS,
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      plan: { type: Number },
      disable: { type: Boolean },
      model: { type: String, required: true },
      color: { type: String, required: true }
    },
    { collection: COSTS }
  )
);

module.exports = {
  incomes,
  wallets,
  costs,
  modelNames: [INCOMES, WALLETS, COSTS]
};
