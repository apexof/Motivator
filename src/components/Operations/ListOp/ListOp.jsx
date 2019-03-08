import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Op from "../Op";
import { el } from "../MakeOp/Breadcrumbs/Breadcrumbs.sass";
import colors from "../../App/sass/colors.sass";
import style from "./ListOp.sass";

function ListOp({ ops, name, type }) {
  const windowTitle = (
    <header className={style.header}>
      <h2 className={style.title}>Перечень операций для: </h2>
      <span className={`${el} ${colors[type]}`}>{name}</span>
    </header>
  );
  if (!ops.length) {
    return (
      <div>
        {windowTitle}
        <p className={style.noOps}>Нет операций</p>
      </div>
    );
  }

  let prevDate = null;
  function showDate(date) {
    const formatDate = moment(date).format("dd Do MMM YYYY");
    if (prevDate === formatDate) return null;
    prevDate = formatDate;
    return <div className={style.date}>{formatDate}</div>;
  }

  const opsRender = ops.map(op => (
    <div key={op._id}>
      {showDate(op.date)}
      <Op
        from={{
          _id: op.from_id,
          type: op.from_type
        }}
        to={{
          _id: op.to_id,
          type: op.to_type
        }}
        opId={op._id}
        amountOp={op.amount}
        tag={op.tag}
        date={new Date(op.date)}
      />
    </div>
  ));
  return (
    <>
      {windowTitle}
      <div className={style.list}>{opsRender}</div>
    </>
  );
}

ListOp.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ops: PropTypes.instanceOf(Array)
};
ListOp.defaultProps = { ops: [] };

export default ListOp;
