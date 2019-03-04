import React from "react";
import PropTypes from "prop-types";
import Diagram from "./Diagram";
import InfoList from "./InfoList";

function Chart({ chart }) {
  return (
    <div>
      <Diagram items={chart.items} />
      <InfoList month={chart.month} items={chart.items} />
    </div>
  );
}
Chart.propTypes = {
  chart: PropTypes.shape({
    items: PropTypes.instanceOf(Array).isRequired,
    month: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};
export default Chart;
