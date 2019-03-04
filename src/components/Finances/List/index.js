import { connect } from "react-redux";
import List from "./List";
import makeGetActiveFins from "../../../selectors/finsSelectors";

const makeMapStateToProps = () => {
  const getActiveFins = makeGetActiveFins();
  function mapStateToProps({ finances }, { type }) {
    return { items: getActiveFins({ finances }, { type }) };
  }
  return mapStateToProps;
};

const ConnectedList = connect(makeMapStateToProps)(List);

export default ConnectedList;
