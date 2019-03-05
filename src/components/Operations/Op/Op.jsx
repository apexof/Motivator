import React from "react";
import PropTypes from "prop-types";
import DelItem from "../../Finances/DelItem";
import { INCOMES, COSTS } from "../../../../constants";
import style from "./Op.sass";
import colors from "../../App/sass/colors.sass";

function Op({ _id, amount, from, to, delOp, from_type, to_type, tag }) {
  let prefix = " ";
  let colorClass;
  if (from_type === INCOMES) {
    prefix = "+";
    colorClass = colors.greenText;
  } else if (to_type === COSTS) {
    prefix = "-";
    colorClass = colors.redText;
  }

  return (
    <div className={style.container}>
      <span className={style.fromTo}>
        <div title={from.name} className={colors[`${from_type}Text`]}>
          {from.name}
        </div>
        <div title={to.name} className={colors[`${to_type}Text`]}>
          {to.name}
        </div>
      </span>
      <span title={tag} className={style.tag}>
        {tag}
      </span>
      <span
        title={`${prefix}${amount}`}
        className={`${style.amount} ${colorClass}`}
      >{`${prefix}${amount}`}
      </span>
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
  to_type: PropTypes.string.isRequired,
  tag: PropTypes.string
};

Op.defaultProps = {
  from: { name: "" },
  to: { name: "" },
  tag: undefined
};

export default Op;
