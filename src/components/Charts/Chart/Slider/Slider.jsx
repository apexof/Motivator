import React from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import { Doughnut } from "react-chartjs-2";
import Info from "../Info";
import style from "./Slider.sass";

function Slider({ chartData, loading }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  if (!chartData.length && !loading) {
    return (
      <div className={style.container}>
        <h2 className={style.noData}>Нет данных для построения отчета</h2>
      </div>
    );
  }
  const charts = chartData.map((chart) => {
    // console.log(chart.items);
    const colors = chart.items.map(item => item.bgcColor);
    return (
      <div key={chart.month}>
        <Doughnut
          data={{
            labels: chart.items.map(item => item.name),
            datasets: [
              {
                data: chart.items.map(item => item.amount),
                backgroundColor: colors,
                hoverBackgroundColor: colors
              }
            ]
          }}
          width={400}
          height={400}
        />
        <Info month={chart.month} unSortedData={chart.items} />
      </div>
    );
  });

  return <div className={style.container}>{<Slick {...settings}>{charts}</Slick>}</div>;
}

Slider.propTypes = {
  chartData: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired
};

export default Slider;
