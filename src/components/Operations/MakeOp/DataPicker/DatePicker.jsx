import React from "react";
import DayPicker from "react-day-picker/DayPickerInput";
import PropTypes from "prop-types";
import MomentLocaleUtils, { formatDate } from "react-day-picker/moment";
import "react-day-picker/lib/style.css";
import style from "../MakeOp.sass";
import "moment/locale/ru";

const customStyle = `
.DayPicker { 
  font-size: 1.4rem; 
}
div.DayPickerInput-OverlayWrapper { 
  top: -25px;
  left: -20px;
  position: absolute;
}
`;

class DatePick extends React.Component {
  state = { selectedDay: this.props.date };

  handleChange = (selectedDay) => {
    this.setState({ selectedDay });
  };

  render() {
    return (
      <div className={style.dayPicker}>
        <p>Дата операции:</p>
        <input type="hidden" name="date" value={this.state.selectedDay} />
        <style>{customStyle}</style>
        <DayPicker
          formatDate={formatDate}
          localeUtils={MomentLocaleUtils}
          locale="ru"
          format="LL"
          onDayChange={this.handleChange}
          value={this.state.selectedDay}
          dayPickerProps={{
            selectedDays: this.state.selectedDay,
            locale: "ru",
            localeUtils: MomentLocaleUtils
          }}
        />
      </div>
    );
  }
}

DatePick.propTypes = { date: PropTypes.instanceOf(Date) };
DatePick.defaultProps = { date: new Date() };
export default DatePick;
