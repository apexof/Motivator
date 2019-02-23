import { connect } from "react-redux";
import ListOp from "./ListOp";
import { opsFilter, OPS_BY_ID } from "../../../selectors/opsFilter";

const mapStateToProps = (state, { _id }) => ({ ops: opsFilter(state.operations, _id, OPS_BY_ID) });

const ConnectedListOp = connect(mapStateToProps)(ListOp);

export default ConnectedListOp;
