import { connect } from "react-redux";
import Charts from "./Charts";

const mapStateToProps = state => ({ hiddenCharts: state.hiddenCharts });

const ConnectedCharts = connect(mapStateToProps)(Charts);

export default ConnectedCharts;
