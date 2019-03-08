import React from "react";
import PropTypes from "prop-types";
import DelItem from "../../Finances/DelItem";
import { INCOMES, COSTS } from "../../../../constants";
import style from "./Op.sass";
import colors from "../../App/sass/colors.sass";

function Op(props) {
  const { opId, amountOp, from, to, delOp, tag, openModal } = props;
  let prefix = " ";
  let colorClass;
  if (from.type === INCOMES) {
    prefix = "+";
    colorClass = colors.greenText;
  } else if (to.type === COSTS) {
    prefix = "-";
    colorClass = colors.redText;
  }

  return (
    <div className={style.container}>
      <div
        title="Нажмите для редактирования операции"
        onClick={() => openModal(from, to)}
        className={style.opContainer}
      >
        <span className={style.fromTo}>
          <span className={colors[`${from.type}Text`]}>{from.name}</span>
          <br />
          <span className={colors[`${to.type}Text`]}>{to.name}</span>
        </span>
        <span className={style.tag}>{tag}</span>
        <span className={`${style.amount} ${colorClass}`}>{`${prefix}${amountOp}`}</span>
      </div>
      <DelItem sass={style.delButton} confirm={() => delOp(opId)} />
    </div>
  );
}

Op.propTypes = {
  opId: PropTypes.string.isRequired,
  amountOp: PropTypes.number.isRequired,
  delOp: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  from: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  to: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  tag: PropTypes.string
};

Op.defaultProps = { tag: undefined };

export default Op;
