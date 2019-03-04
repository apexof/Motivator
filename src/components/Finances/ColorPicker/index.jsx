import React from "react";
import { CirclePicker } from "react-color";
import PropTypes from "prop-types";
import randomColor from "randomcolor";

class ColorPicker extends React.Component {
  state = { color: this.props.color };

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <div style={{ marginLeft: 30, marginTop: 15 }}>
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
ColorPicker.defaultProps = { color: randomColor() };
export default ColorPicker;