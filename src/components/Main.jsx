import React from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import App from "./App";
import auth0 from "./Auth/Auth";
import Callback from "./Auth/Callback";
import SecuredRoute from "./Auth/SecuredRoute";

class Main extends React.Component {
  state = { checkingSession: true };

  async componentDidMount() {
    if (this.props.location.pathname === "/callback") {
      this.setState({ checkingSession: false });
      return;
    }
    try {
      await auth0.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== "login_required") console.log(err.error);
    }
    this.setState({ checkingSession: false });
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <SecuredRoute path="/app" component={App} checkingSession={this.state.checkingSession} />
        <Route exact path="/callback" component={Callback} />
      </div>
    );
  }
}

Main.propTypes = { location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired };

export default withRouter(Main);
