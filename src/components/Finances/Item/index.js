import { connect } from "react-redux";
import { deleteItem, disableItem, setDragEl } from "../../../AC";
import Item from "./DragNDrop";
import { WALLETS } from "../../../../common/constants";

import opWindow from "../../../HOC/windows/opWindow";
import listOpWindow from "../../../HOC/windows/listOpWindow";
import AddOp from "../../Operations/MakeOp";
import ListOp from "../../Operations/ListOp";
import { monthAmount } from "../../../selectors/opsSelectors";

const mapStateToProps = ({ operations, dragEl }, { type, _id, amount }) => ({
  dragEl,
  amount: type !== WALLETS ? monthAmount({ operations }, { _id }) : amount,
  holdWallets: type === WALLETS ? monthAmount({ operations }, { _id }) : undefined
});
const mapDispatchToProps = {
  deleteItem,
  disableItem,
  setDragEl
};

const ConnectedItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);

const draggableItem = opWindow(ConnectedItem, AddOp);
export default listOpWindow(draggableItem, ListOp);
