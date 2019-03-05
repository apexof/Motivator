const { incomes, wallets, costs } = require("../../models/financeModels");
const { del_all_ops } = require("../../db/requests/operations");

let funcs = {};

[incomes, wallets, costs].forEach((model) => {
  const mName = model.modelName;
  funcs = {
    ...funcs,
    [`list_${mName}`]: () => model.find().then(data => ({ [mName]: data })),
    [`create_${mName}`]: item => model.create(item),
    [`update_${mName}`]: (_id, item) => model.updateOne({ _id }, item).then(() => model.findById(_id)),
    [`delete_${mName}`]: _id => del_all_ops(_id).then(newItems => model.deleteOne({ _id }).then(() => ({
      _id,
      model: mName,
      newItems
    }))),
    [`disable_${mName}`]: _id => model.updateOne({ _id }, { disable: true }).then(() => model.findById(_id))
  };
});

module.exports = funcs;
