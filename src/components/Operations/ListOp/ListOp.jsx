import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Op from "../Op";
import { el } from "../AddOp/Breadcrumbs/Breadcrumbs.sass";
import colors from "../../App/sass/colors.sass";
import style from "./ListOp.sass";

let prevDate = null;
function showDate(date) {
  const formatDate = moment(date).format("dd Do MMM YYYY");
  if (prevDate === formatDate) {
    return null;
  }
  prevDate = formatDate;
  return <div className={style.date}>{formatDate}</div>;
}

class ListOp extends React.Component {
  componentDidMount() {
    prevDate = null;
  }

  render() {
    const { ops, name, type } = this.props;
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
    return (
      <>
        {windowTitle}
        <div className={style.list}>
          {ops.map(op => (
            <div key={op._id}>
              {showDate(op.date)}
              <Op
                from_type={op.from_type}
                from_id={op.from_id}
                to_type={op.to_type}
                to_id={op.to_id}
                _id={op._id}
                amount={op.amount}
                tag={op.tag}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

ListOp.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ops: PropTypes.instanceOf(Array)
};
ListOp.defaultProps = { ops: [] };

export default ListOp;
