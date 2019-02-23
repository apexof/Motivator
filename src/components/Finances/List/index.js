import { connect } from "react-redux";
import List from "./List";
import { makeGetActiveFins } from "../../../selectors";

const makeMapStateToProps = () => {
  const getActiveFins = makeGetActiveFins();
  function mapStateToProps(state, { type }) {
    return { items: getActiveFins(state.finances[type]) };
  }
  return mapStateToProps;
};

const ConnectedList = connect(makeMapStateToProps)(List);

export default ConnectedList;
