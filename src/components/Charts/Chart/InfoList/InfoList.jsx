import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import style from "./InfoList.sass";
import InfoItem from "../InfoItem";

const { fixAccuracy } = require("../../../../../common/funcs");

function Info({ items, month, period }) {
  let summ = 0;
  const lines = items.map((item) => {
    summ += item.amount;
    return <InfoItem key={item._id} item={item} />;
  });

  return (
    <div>
      <h2 title={`С ${period[0]}-го по ${period[1]}-е`}>{moment(month).format("MMMM YYYY")}</h2>
      {lines}
      <div className={style.summ}>
        <span>Сумма: </span>
        <span>{fixAccuracy(summ)}</span>
      </div>
    </div>
  );
}

Info.propTypes = {
  items: PropTypes.instanceOf(Array),
  month: PropTypes.instanceOf(Date).isRequired,
  period: PropTypes.instanceOf(Array).isRequired
};

Info.defaultProps = { items: [] };

export default Info;
