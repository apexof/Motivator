import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import auth0 from "./Auth";
import Loading from "../Loading";

class Callback extends Component {
  async componentDidMount() {
    await auth0.handleAuth();
    this.props.history.replace("/app");
  }

  render() {
    return <Loading />;
  }
}

Callback.propTypes = { history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired };

export default withRouter(Callback);
