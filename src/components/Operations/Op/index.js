import { connect } from "react-redux";
import { delOp } from "../../../AC";
import Op from "./Op";
import AddOp from "../MakeOp";
import opWindow from "../../../HOC/windows/opWindow";

const mapStateToProps = (state, { from, to }) => {
  const fromItems = state.finances[from.type];
  const toItems = state.finances[to.type];
  const fromItem = fromItems.find(item => item._id === from._id);
  const toItem = toItems.find(item => item._id === to._id);

  return {
    from: {
      name: fromItem.name,
      _id: from._id,
      type: from.type,
      amount: fromItem.amount
    },
    to: {
      name: toItem.name,
      _id: to._id,
      type: to.type
    }
  };
};
const mapDispatchToProps = { delOp };

const ConnectedOp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Op);

export default opWindow(ConnectedOp, AddOp);
