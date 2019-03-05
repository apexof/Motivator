import React from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import Chart from "../Chart";
import style from "./Slider.sass";
import { MMYY } from "../../../helpers";

const customStyle = `
  .slick-prev, .slick-next {
    top: 200px;
  }
  .slick-prev:before, .slick-next:before {
    color: #1c2026;
    line-height: 22px;
  }
  .slick-dots li button {  
    border-radius: 5px;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .5);
  }`;
class Slider extends React.Component {
  slider = React.createRef();

  slideIndex = 0;

  goTo(index) {
    this.slideIndex = index;
    if (this.slider.current) {
      this.slider.current.slickGoTo(index, true);
    }
  }

  render() {
    const { chartData, loading } = this.props;
    if (!chartData.length && !loading) {
      return (
        <div className={style.container}>
          <h2 className={style.noData}>Нет данных для построения отчета</h2>
        </div>
      );
    }
    const charts = chartData.map((chart, index) => {
      if (chart.month.toString() === MMYY(new Date()) && this.slideIndex !== index) {
        this.goTo(index);
      }
      return <Chart key={chart.month} chart={chart} />;
    });

    return (
      <div className={style.container}>
        <style>{customStyle}</style>
        <Slick
          ref={this.slider}
          dots
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          initialSlide={this.slideIndex}
        >
          {charts}
        </Slick>
      </div>
    );
  }
}

Slider.propTypes = {
  chartData: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired
};

export default Slider;
