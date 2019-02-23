import { connect } from "react-redux";
import SliderCharts from "./Slider/Slider";
import makeOpsByPeriods from "../../../selectors/opsByPeriods";

const makeMapStateToProps = () => {
  const opsByPeriods = makeOpsByPeriods();
  function mapStateToProps(state, { type }) {
    return {
      chartData: opsByPeriods(state, type),
      loading: state.loading
    };
  }
  return mapStateToProps;
};

const connectedSliderCharts = connect(makeMapStateToProps)(SliderCharts);

export default connectedSliderCharts;
