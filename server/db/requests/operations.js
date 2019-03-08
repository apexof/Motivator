const { operations } = require("../../models/operationsModels");
const { INCOMES, WALLETS, COSTS } = require("../../../constants");
const { wallets } = require("../../models/financeModels");
const { fixAccuracy } = require("../../../src/helpers/commonFuncs");

function get_all_operations() {
  return operations.find().sort({ date: -1 });
}

function get_operations(_id) {
  return operations.find({ $or: [{ from_id: _id }, { to_id: _id }] }).sort({ date: -1 });
}

function add_operation(op) {
  return operations
    .create(op)
    .then(newOp => update_wallets(newOp).then(newItems => ({ newItems, newOp })));
}

function update_operation(op) {
  return operations.findById(op._id).then(oldOp => operations
    .updateOne({ _id: op._id }, op)
    .then(() => operations.findById(op._id))
    .then(newOp => update_wallets(newOp, "edit", oldOp.amount).then(newItems => ({
      newItems,
      newOp
    }))));
}

function delete_operation(_id) {
  return operations
    .findById(_id)
    .then(op => update_wallets(op, "del"))
    .then(newItems => operations.deleteOne({ _id }).then(() => newItems.filter(item => item)));
}

function del_all_ops(_id) {
  return get_operations(_id)
    .then(ops => ops.map(op => delete_operation(op._id)))
    .then(data => Promise.all(data))
    .then((data) => {
      const items = [];
      data.forEach(el => items.push(...el));
      return items;
    });
}

function update_wallets(op, mode = "add", oldAmount) {
  const { from_type, from_id, to_type, to_id } = op;
  let amount;
  if (mode === "add") amount = op.amount;
  if (mode === "del") amount = -op.amount;
  if (mode === "edit") amount = op.amount - oldAmount;

  if (to_type === COSTS) {
    return Promise.all([upd(from_id, -amount)]);
  }
  if (from_type === INCOMES) {
    return Promise.all([upd(to_id, amount)]);
  }
  if (from_type === WALLETS && to_type === WALLETS) {
    return Promise.all([upd(from_id, -amount), upd(to_id, amount)]);
  }

  return console.log("add_operation ни одно условие не сработало");
}

function upd(_id, dif) {
  return wallets
    .findById(_id)
    .then(({ amount }) => wallets.updateOne({ _id }, { amount: fixAccuracy(amount + dif) }))
    .then(() => wallets.findById(_id));
}

module.exports = {
  get_operations,
  get_all_operations,
  add_operation,
  update_operation,
  delete_operation,
  del_all_ops
};
