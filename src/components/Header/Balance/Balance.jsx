import React from "react";
import PropTypes from "prop-types";
import style from "./balance.sass";

const { fixAccuracy } = require("../../../helpers/commonFuncs");

function Balance({ wallets }) {
  let summ = 0;
  if (wallets.length) {
    summ = wallets.reduce((prev, cur) => (cur.balance ? prev + cur.amount : prev), 0);
  }
  return <div className={style.balance}>Общий баланс: {fixAccuracy(summ)}</div>;
}

Balance.propTypes = { wallets: PropTypes.instanceOf(Array).isRequired };

export default Balance;
