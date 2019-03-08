import React from "react";
import PropTypes from "prop-types";
import style from "./Breadcrumbs.sass";
import colors from "../../../App/sass/colors.sass";
import arrow from "./arrow.png";

function Breadcrumbs({ from, to }) {
  return (
    <div className={style.chain}>
      <span className={`${style.el} ${colors[from.type]}`}>{from.name}</span>
      <img src={arrow} alt="стрелка" />
      <span className={`${style.el} ${colors[to.type]}`}>{to.name}</span>
    </div>
  );
}

Breadcrumbs.propTypes = {
  from: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  to: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Breadcrumbs;
