import React, { Component } from "react";
import PropTypes from "prop-types";

class CheckBox extends Component {
  state = { active: true };

  handleClick = () => {
    this.setState(state => ({ active: !state.active }));
  };

  render() {
    const { name } = this.props;
    return (
      <input
        type="checkbox"
        checked={this.state.active}
        value={this.state.active}
        name={name}
        onChange={this.handleClick}
      />
    );
  }
}
CheckBox.propTypes = { name: PropTypes.string.isRequired };

export default CheckBox;
