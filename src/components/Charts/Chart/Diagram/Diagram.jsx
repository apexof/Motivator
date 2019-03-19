import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

function Diagram({ items }) {
  const colors = [];
  const labels = [];
  const data = [];
  items.forEach((item) => {
    colors.push(item.bgcColor);
    labels.push(item.name);
    data.push(item.amount);
  });
  return (
    <Doughnut
      data={{
        labels,
        datasets: [
          {
            data,
            backgroundColor: colors,
            hoverBackgroundColor: colors
          }
        ]
      }}
      width={1}
      height={1}
      options={{ legend: { display: false } }}
    />
  );
}
Diagram.propTypes = { items: PropTypes.instanceOf(Array).isRequired };
export default Diagram;
