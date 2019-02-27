import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import auth0 from "./Auth";
import Loading from "../Loading";

function SecuredRoute({ component: Component, path, checkingSession }) {
  return (
    <Route
      path={path}
      render={() => {
        if (checkingSession) return <Loading />;
        if (!auth0.isAuth()) {
          auth0.signIn();
          return <div />;
        }
        return <Component />;
      }}
    />
  );
}

SecuredRoute.propTypes = {
  path: PropTypes.string.isRequired,
  checkingSession: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default SecuredRoute;
