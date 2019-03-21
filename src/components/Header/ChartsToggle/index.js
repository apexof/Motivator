import { connect } from "react-redux";
import ChartsToggle from "./ChartsToggle";

import { toggleCharts } from "../../../AC";

const mapStateToProps = state => ({ hiddenCharts: state.hiddenCharts });
const mapDispatchToProps = { toggleCharts };

const ConnectedChartsToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsToggle);

export default ConnectedChartsToggle;
