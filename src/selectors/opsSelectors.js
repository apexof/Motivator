import { createSelector } from "reselect";
import { INCOMES, COSTS, WALLETS } from "../../constants";
import { fixAccuracy, MMYY } from "../helpers";
import { itemsByFinType } from "./finsSelectors";

const opsFromState = state => state.operations;
const opsByFinId = ({ operations: ops }, { _id }) => ops.filter(op => op.from_id === _id || op.to_id === _id);
const opsByMonth = ({ operations: ops }, { month = MMYY(new Date()) }) => ops.filter(op => MMYY(op.date) === month);
const opsByIdByMonth = (state, props) => opsByMonth({ operations: opsByFinId(state, props) }, props);
const getType = (state, props) => props.type;
const mons = new Set();

const monthsHavingOps = createSelector(
  [opsFromState],
  (ops) => {
    ops.forEach((op) => {
      mons.add(MMYY(op.date));
    });
    return mons;
  }
);

const periodOfOps = createSelector(
  [opsByMonth],
  (ops) => {
    ops.sort((a, b) => new Date(a.date) - new Date(b.date));
    const firstDay = new Date(ops[0].date).getDate();
    const lastDay = new Date(ops[ops.length - 1].date).getDate();
    return [firstDay, lastDay];
  }
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

const makeSummGroupedByMonth = createSelector(
  [opsByFinType, itemsByFinType, monthsHavingOps],
  (operations, items, months) => {
    const summGroupedByMonth = [];
    months.forEach((month) => {
      const Nitems = [];
      items.forEach((item) => {
        const monthSumm = monthAmount({ operations }, { _id: item._id, month });
        const tags = tagsByItemId({ operations }, { _id: item._id, month });
        if (monthSumm > 0) {
          Nitems.push({
            _id: item._id,
            name: item.name,
            amount: monthSumm,
            tags,
            bgcColor: item.color
          });
        }
      });
      if (Nitems.length) {
        summGroupedByMonth.push({
          month: new Date(month),
          items: Nitems.sort((a, b) => a.name.localeCompare(b.name)),
          period: periodOfOps({ operations }, { month })
        });
      }
    });
    summGroupedByMonth.sort((a, b) => a.month - b.month);
    return summGroupedByMonth;
  }
);

const monthAmount = createSelector(
  [opsByIdByMonth],
  ops => fixAccuracy(ops.reduce((summ, op) => summ + op.amount, 0))
);

const tagsByItemId = createSelector(
  [opsByIdByMonth],
  (ops) => {
    const tags = [];
    ops.forEach((op) => {
      if (op.tag) {
        const index = tags.findIndex(tag => tag.tagName.toLowerCase() === op.tag.toLowerCase());
        if (index >= 0) {
          tags[index].amount += op.amount;
        } else {
          tags.push({ tagName: op.tag, amount: op.amount });
        }
      }
    });
    return tags;
  }
);

export {
  monthAmount, opsByFinId, makeSummGroupedByMonth
};
