import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import style from "./InfoList.sass";
import InfoItem from "../InfoItem";

function Info({ items, month }) {
  let summ = 0;
  const lines = items.map((item) => {
    summ += item.amount;
    return <InfoItem key={item._id} item={item} />;
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
  items: PropTypes.instanceOf(Array),
  month: PropTypes.instanceOf(Date).isRequired
};

Info.defaultProps = { items: [] };

export default Info;
