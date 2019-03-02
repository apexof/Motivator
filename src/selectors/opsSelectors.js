import { createSelector } from "reselect";
import { INCOMES, COSTS, WALLETS } from "../../constants";
import { fixAccuracy, MMYY } from "../helpers";
import { itemsByFinType } from "./finsSelectors";

const opsFromState = state => state.operations;
const getId = (state, props) => props._id;
const getType = (state, props) => props.type;
const getMonth = (state, props) => (props.month ? props.month : MMYY(new Date()));
const monthsHavingOps = (state) => {
  const months = new Set();
  state.operations.forEach((op) => {
    months.add(MMYY(op.date));
  });
  return months;
};

const opsByFinId = createSelector(
  [getId, opsFromState],
  (_id, ops) => ops.filter(op => op.from_id === _id || op.to_id === _id)
);

const opsByFinType = createSelector(
  [getType, opsFromState],
  (type, ops) => {
    switch (type) {
      case INCOMES:
        return ops.filter(op => op.from_type === type);
      case WALLETS:
        return ops.filter(op => op.to_type === type && op.from_type === type);
      case COSTS:
        return ops.filter(op => op.to_type === type);
      default:
        return ops;
    }
  }
);

const makeSummGroupedByMonth = () => createSelector(
  [opsByFinType, itemsByFinType, monthsHavingOps],
  (operations, items, months) => {
    const summGroupedByMonth = [];
    months.forEach((month) => {
      const Nitems = [];
      items.forEach((item) => {
        const monthSumm = monthAmount({ operations }, { _id: item._id, month });
        if (monthSumm > 0) {
          Nitems.push({
            _id: item._id,
            name: item.name,
            amount: monthSumm,
            bgcColor: item.color
          });
        }
      });
      if (Nitems.length) {
        summGroupedByMonth.push({
          month: new Date(month),
          items: Nitems
        });
      }
    });
    return summGroupedByMonth;
  }
);

const monthAmount = createSelector(
  [getMonth, opsByFinId],
  (month, ops) => {
    const monthSumm = ops.reduce((summ, op) => {
      const opMonth = MMYY(op.date);
      return opMonth === month ? summ + op.amount : summ;
    }, 0);

    return fixAccuracy(monthSumm);
  }
);

export {
  monthAmount, opsByFinId, opsByFinType, makeSummGroupedByMonth
};
