import React, { Component } from "react";
import PropTypes from "prop-types";

class CheckBox extends Component {
  state = { active: this.props.value };

  handleClick = () => {
    this.setState(state => ({ active: !state.active }));
  };

  render() {
    return (
      <>
        <input type="hidden" name={this.props.name} value={this.state.active} />
        <input type="checkbox" checked={this.state.active} onChange={this.handleClick} />
      </>
    );
  }
}
CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool
};
CheckBox.defaultProps = { value: true };
export default CheckBox;
