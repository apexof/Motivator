import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Callback from "../Callback";

function Main() {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/callback" component={Callback} />
    </div>
  );
}

export default Main;
