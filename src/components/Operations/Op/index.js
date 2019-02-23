import { connect } from "react-redux";
import { delOp } from "../../../AC";
import Op from "./Op";

const mapStateToProps = (state, props) => {
  const fromCoins = state.finances[props.from_type];
  const toCoins = state.finances[props.to_type];
  const from = fromCoins.find(coin => coin._id === props.from_id);
  const to = toCoins.find(coin => coin._id === props.to_id);

  return { from, to };
};
const mapDispatchToProps = { delOp };

const ConnectedOp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Op);

export default ConnectedOp;
