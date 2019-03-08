import React from "react";
import DayPicker from "react-day-picker";
import PropTypes from "prop-types";
import MomentLocaleUtils from "react-day-picker/moment";
import "react-day-picker/lib/style.css";
import style from "../MakeOp.sass";
import "moment/locale/ru";

const customStyle = ".DayPicker { font-size: 1.3rem }";

class DatePick extends React.Component {
  state = { selectedDay: this.props.date };

  handleClick = (day, { selected }) => {
    this.setState({ selectedDay: selected ? undefined : day });
  };

  render() {
    return (
      <div className={style.dayPicker}>
        <input type="hidden" name="date" value={this.state.selectedDay} />
        <style>{customStyle}</style>
        <DayPicker
          localeUtils={MomentLocaleUtils}
          locale="ru"
          onDayClick={this.handleClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
    );
  }
}

DatePick.propTypes = { date: PropTypes.instanceOf(Date) };
DatePick.defaultProps = { date: new Date() };
export default DatePick;