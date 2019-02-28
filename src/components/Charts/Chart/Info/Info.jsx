import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import style from "./Info.sass";

function Info({ names, amounts, ids, date }) {
  let lines = [];
  let summ = 0;
  if (names.length) {
    for (let i = 0; i < names.length; i += 1) {
      summ += amounts[i];
      lines.push({
        id: ids[i],
        name: names[i],
        amount: amounts[i]
      });
    }
    lines.sort((a, b) => a.name.localeCompare(b.name));
    lines = lines.map(line => (
      <div key={line.id} className={style.container}>
        <span>{line.name}</span>
        <span>{line.amount}</span>
      </div>
    ));
  }
  // console.log(lines);

  return (
    <div>
      <h2>{moment(date).format("MMMM YYYY")}</h2>
      {lines}
      <div className={style.summ}>
        <span>Сумма: </span>
        <span>{summ}</span>
      </div>
    </div>
  );
}

Info.propTypes = {
  names: PropTypes.instanceOf(Array),
  amounts: PropTypes.instanceOf(Array),
  ids: PropTypes.instanceOf(Array),
  date: PropTypes.string
};
Info.defaultProps = {
  names: [],
  amounts: [],
  ids: [],
  date: ""
};
export default Info;
