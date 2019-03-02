import { connect } from "react-redux";
import ListOp from "./ListOp";
import { opsByFinId } from "../../../selectors/opsSelectors";

function mapStateToProps(state, props) {
  return { ops: opsByFinId(state, props) };
}

const ConnectedListOp = connect(mapStateToProps)(ListOp);

export default ConnectedListOp;
