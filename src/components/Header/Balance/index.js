import { connect } from "react-redux";
import Balance from "./Balance";
import makeGetActiveFins from "../../../selectors/finsSelectors";
import { WALLETS } from "../../../../common/constants";

const makeMapStateToProps = () => {
  const getActiveFins = makeGetActiveFins();
  function mapStateToProps({ finances }) {
    return { wallets: getActiveFins({ finances }, { type: WALLETS }) };
  }
  return mapStateToProps;
};

const connectedBalance = connect(makeMapStateToProps)(Balance);

export default connectedBalance;
