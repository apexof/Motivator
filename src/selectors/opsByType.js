import { createSelector } from "reselect";

const { INCOMES, COSTS } = require("../../constants");

const typeFilter = (ops, type) => type;
const getOps = ops => ops;

const opsByType = createSelector(
  [typeFilter, getOps],
  (type, ops) => {
    switch (type) {
      case INCOMES: {
        console.log(ops.to_type);
        return ops.filter(op => op.to_type === type);
      }
      case COSTS: {
        return ops;
      }
      default:
        return null;
    }
  }
);

export default opsByType;
