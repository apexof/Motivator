import { connect } from "react-redux";
import AddOp from "./MakeOp";
import { addOp, editOp } from "../../../AC";

const mapDispatchToProps = (dispatch, { amountOp }) => ({
  makeOp: (formData) => {
    const makeOp = amountOp ? editOp : addOp;
    return dispatch(makeOp(formData));
  }
});

const ConnectedAddOp = connect(
  null,
  mapDispatchToProps
)(AddOp);

export default ConnectedAddOp;
