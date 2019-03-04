import { connect } from "react-redux";
import ListOp from "./ListOp";
import { opsByFinId } from "../../../selectors/opsSelectors";

function mapStateToProps({ operations }, { _id }) {
  return { ops: opsByFinId({ operations }, { _id }) };
}

const ConnectedListOp = connect(mapStateToProps)(ListOp);

export default ConnectedListOp;
