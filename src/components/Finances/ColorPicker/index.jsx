import React from "react";
import { CirclePicker } from "react-color";
import PropTypes from "prop-types";
import style from "./ColorPicker.sass";

class ColorPicker extends React.Component {
  state = { color: this.props.color };

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <div className={style.colorPicker}>
        <p>Цвет для отчетов:</p>
        <CirclePicker
          width={220}
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete}
        />
        <input type="hidden" name="color" value={this.state.color} />
      </div>
    );
  }
}
ColorPicker.propTypes = { color: PropTypes.string };
ColorPicker.defaultProps = { color: "#d7d7d7" };
export default ColorPicker;
