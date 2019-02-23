import { createSelector } from "reselect";

export const THIS_MONTH_SUMM = "THIS_MONTH_SUMM";
export const OPS_BY_ID = "OPS_BY_ID";
const periodFilter = (ops, _id, filter) => filter;
const getItems = (ops, _id) => ops.filter(op => op.from_id === _id || op.to_id === _id);

export const opsFilter = createSelector(
  [periodFilter, getItems],
  (filter, ops) => {
    switch (filter) {
      case THIS_MONTH_SUMM: {
        return ops.reduce((prev, op) => {
          const opMonth = new Date(op.date).getMonth();
          const curMonth = new Date().getMonth();
          return opMonth === curMonth ? prev + op.amount : prev;
        }, 0);
      }
      case OPS_BY_ID: {
        return ops;
      }
      default:
        return null;
    }
  }
);
