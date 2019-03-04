import { connect } from "react-redux";
import SliderCharts from "./Slider";
import { makeSummGroupedByMonth } from "../../../selectors/opsSelectors";

function makeMapStateToProps({ finances, operations, loading }, { type }) {
  return {
    chartData: makeSummGroupedByMonth({ finances, operations }, { type }),
    loading
  };
}

const connectedSliderCharts = connect(makeMapStateToProps)(SliderCharts);

export default connectedSliderCharts;
