import React from "react";
import PropTypes from "prop-types";
import DelItem from "../../Finances/DelItem";
import { INCOMES, COSTS } from "../../../../constants";
import style from "./Op.sass";
import { greenText, redText } from "../../App/sass/colors.sass";

function Op({ _id, amount, from, to, delOp, from_type, to_type }) {
  let prefix = " ";
  let colorClass;
  if (from_type === INCOMES) {
    prefix = "+";
    colorClass = greenText;
  } else if (to_type === COSTS) {
    prefix = "-";
    colorClass = redText;
  }

  return (
    <div className={style.container}>
      <span className={style.fromTo}>
        <div>{from.name}</div>
        <div>{to.name}</div>
      </span>
      <span className={`${style.amount} ${colorClass}`}>{`${prefix}${amount}`}</span>
      <DelItem sass={style.delButton} confirm={() => delOp(_id)} />
    </div>
  );
}

Op.propTypes = {
  _id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  delOp: PropTypes.func.isRequired,
  from: PropTypes.shape({ name: PropTypes.string }),
  to: PropTypes.shape({ name: PropTypes.string }),
  from_type: PropTypes.string.isRequired,
  to_type: PropTypes.string.isRequired
};

Op.defaultProps = {
  from: { name: "" },
  to: { name: "" }
};

export default Op;
