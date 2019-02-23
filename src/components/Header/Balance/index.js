import { connect } from "react-redux";
import Balance from "./Balance";
import { makeGetActiveFins } from "../../../selectors";

const makeMapStateToProps = () => {
  const getActiveFins = makeGetActiveFins();
  function mapStateToProps(state) {
    return { wallets: getActiveFins(state.finances.wallets) };
  }
  return mapStateToProps;
};

const connectedBalance = connect(makeMapStateToProps)(Balance);

export default connectedBalance;
