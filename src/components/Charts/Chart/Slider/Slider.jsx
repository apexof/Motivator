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
  console.log("chartData",chartData) 
  const charts = chartData.map(chart => (
    <div key={chart.key}>
      <Doughnut data={chart} width={400} height={400} />
      <Info
        amounts={chart.datasets[0].data}
        names={chart.labels}
        ids={chart.ids}
        date={chart.date}
      />
    </div>
  ));

  return <div className={style.container}>{<Slick {...settings}>{charts}</Slick>}</div>;
}

Slider.propTypes = {
  chartData: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired
};

export default Slider;
