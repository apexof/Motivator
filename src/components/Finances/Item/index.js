import { connect } from "react-redux";
import { deleteItem, disableItem, startDnd } from "../../../AC";
import Item from "./DragNDrop";
import { WALLETS } from "../../../../constants";

import opWindow from "../../../HOC/windows/opWindow";
import listOpWindow from "../../../HOC/windows/listOpWindow";
import AddOp from "../../Operations/AddOp";
import ListOp from "../../Operations/ListOp";
import { opsFilter, THIS_MONTH_SUMM } from "../../../selectors/opsFilter";

const mapStateToProps = (state, { type, _id, amount }) => ({
  dragEl: state.dragEl,
  amount: type !== WALLETS ? opsFilter(state.operations, _id, THIS_MONTH_SUMM) : amount,
  holdWallets: type === WALLETS ? opsFilter(state.operations, _id, THIS_MONTH_SUMM) : undefined
});
const mapDispatchToProps = {
  deleteItem,
  disableItem,
  startDnd
};

const ConnectedItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);

const draggableItem = opWindow(ConnectedItem, AddOp);
export default listOpWindow(draggableItem, ListOp);
