import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import style from "./Info.sass";
import withSort from "../../../../HOC/withSort";

function Info({ sortedData, unSortedData, month, sort }) {
  // console.log("sortedData: ", sortedData);
  // console.log("unSortedData: ", unSortedData);
  let summ = 0;
  const lines = sortedData.map((item) => {
    summ += item.amount;
    return (
      <div key={item._id} className={style.container}>
        <span onClick={sort("str")}>{item.name}</span>
        <span onClick={sort("num")}>{item.amount}</span>
      </div>
    );
  });

  return (
    <div>
      <h2>{moment(month).format("MMMM YYYY")}</h2>
      {lines}
      <div className={style.summ}>
        <span>Сумма: </span>
        <span>{summ}</span>
      </div>
    </div>
  );
}

Info.propTypes = {
  sortedData: PropTypes.instanceOf(Array),
  month: PropTypes.instanceOf(Date).isRequired,
  sort: PropTypes.func.isRequired
};

Info.defaultProps = { sortedData: [] };

export default withSort(Info);
