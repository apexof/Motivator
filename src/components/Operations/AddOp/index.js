import { connect } from "react-redux";
import AddOp from "./AddOp";
import { addOp } from "../../../AC";

const mapDispatchToProps = { addOp };

const ConnectedAddOp = connect(
  null,
  mapDispatchToProps
)(AddOp);

export default ConnectedAddOp;
