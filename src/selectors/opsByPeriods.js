import randomColor from "randomcolor";
import { createSelector } from "reselect";
import moment from "moment";

const { INCOMES, COSTS } = require("../../constants");

const getCosts = ({ finances }, type) => finances[type];

const getOps = ({ operations: ops }, type) => {
  if (type === INCOMES) return ops.filter(op => op.from_type === type);
  if (type === COSTS) return ops.filter(op => op.to_type === type);
  return new Error("Передан не подходящий тип для построения отчета.");
};

const colors = [
  "#36A2EB",
  "#FFCE56",
  "#FF6384",
  "#d89d5d",
  "#737edd",
  "#2aca79",
  "#b71651",
  "#1fafa3"
];

const makeOpsByPeriods = () => createSelector(
  [getCosts, getOps],
  (costs, ops) => {
    function getNameById(id) {
      if (!costs.length) return "Имя";
      const find = costs.find(item => item._id === id);
      // console.log(costs, ops);
      return find.name;
      // if (find && find.name) return find.name;
      // return "Хз";
    }
    const charts = [];
    ops.forEach(({ date, amount, to_id, from_id, from_type }) => {
      const itemId = from_type === INCOMES ? from_id : to_id;
      const formatDate = moment(date).format("MMYY");
      const i = charts.findIndex(chart => chart.key === formatDate);

      if (i >= 0) {
        const costIndex = charts[i].ids.findIndex(id => id === itemId);
        if (costIndex >= 0) {
          charts[i].datasets[0].data[costIndex] += amount;
        } else {
          const color = randomColor();
          charts[i].ids.push(itemId);
          charts[i].labels.push(getNameById(itemId));
          charts[i].datasets[0].data.push(amount);
          charts[i].datasets[0].backgroundColor.push(color);
          charts[i].datasets[0].hoverBackgroundColor.push(color);
        }
      } else {
        charts.push({
          key: formatDate,
          ids: [itemId],
          date,
          labels: [getNameById(itemId)],
          datasets: [
            {
              data: [amount],
              backgroundColor: colors,
              hoverBackgroundColor: colors
            }
          ]
        });
      }
    });
    return charts;
  }
);

export default makeOpsByPeriods;
