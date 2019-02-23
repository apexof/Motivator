const { operations } = require("../../models/operationsModels");
const { INCOMES, WALLETS, COSTS } = require("../../../constants");
const { wallets } = require("../../models/financeModels");

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

function delete_operation(_id) {
  return operations
    .findById(_id)
    .then(op => update_wallets(op, true))
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

function update_wallets(op, delMode = false) {
  const { from_type, from_id, to_type, to_id } = op;
  const amount = delMode ? -op.amount : op.amount;
  const dec = { $inc: { amount: -amount } };
  const inc = { $inc: { amount } };

  if (to_type === COSTS) {
    return Promise.all([upd(from_id, dec)]);
  }
  if (from_type === INCOMES) {
    return Promise.all([upd(to_id, inc)]);
  }
  if (from_type === WALLETS && to_type === WALLETS) {
    return Promise.all([upd(from_id, dec), upd(to_id, inc)]);
  }

  return console.log("add_operation ни одно условие не сработало");
}

function upd(_id, obj) {
  return wallets.updateOne({ _id }, obj).then(() => wallets.findById(_id));
}

module.exports = {
  get_operations,
  get_all_operations,
  add_operation,
  delete_operation,
  update_wallets,
  del_all_ops
};
