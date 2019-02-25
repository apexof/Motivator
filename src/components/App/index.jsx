import React from "react";
import { connect, Provider } from "react-redux";
import store from "../../store/store";
import App from "./App";

function mapStateToProps(state) {
  return { loading: state.loading };
}

const ConnectedApp = connect(mapStateToProps)(App);

function ResultApp() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}
export default ResultApp;
