import React from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import App from "./App";
import auth0 from "./Auth/Auth";
import Callback from "./Auth/Callback";
import Home from "./Home/Home";
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
      <>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/demo"
          render={() => {
            if (auth0.isAuth()) auth0.signOut("/demo");
            return <App />;
          }}
        />
        <SecuredRoute
          exact
          path="/app"
          component={App}
          checkingSession={this.state.checkingSession}
        />
        <Route exact path="/callback" component={Callback} />
      </>
    );
  }
}

Main.propTypes = { location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired };

export default withRouter(Main);
