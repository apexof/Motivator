import React from "react";
import { connect, Provider } from "react-redux";
import store from "../../store/store";
import App from "./App";
import { getItems, getOps } from "../../AC";

function mapStateToProps(state) {
  return { loading: state.loading };
}
const mapDispatchToProps = {
  getItems,
  getOps
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function ResultApp() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}
export default ResultApp;
