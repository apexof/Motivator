import { connect } from "react-redux";
import SliderCharts from "./Slider/Slider";
import { makeSummGroupedByMonth } from "../../../selectors/opsSelectors";

const makeMapStateToProps = () => {
  const summGroupedByMonth = makeSummGroupedByMonth();
  function mapStateToProps(state, props) {
    return {
      chartData: summGroupedByMonth(state, props),
      loading: state.loading
    };
  }
  return mapStateToProps;
};

const connectedSliderCharts = connect(makeMapStateToProps)(SliderCharts);

export default connectedSliderCharts;
