import { connect } from "react-redux";
import App from "./App";

function mapStateToProps(state) {
  return { loading: state.loading };
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
