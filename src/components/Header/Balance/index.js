import { connect } from "react-redux";
import Balance from "./Balance";
import makeGetActiveFins from "../../../selectors/finsSelectors";
import { WALLETS } from "../../../../constants";

const makeMapStateToProps = () => {
  const getActiveFins = makeGetActiveFins();
  function mapStateToProps(state) {
    return { wallets: getActiveFins(state, { type: WALLETS }) };
  }
  return mapStateToProps;
};

const connectedBalance = connect(makeMapStateToProps)(Balance);

export default connectedBalance;
