import React from "react";
import Slider from "./Slider";
import style from "./Charts.sass";
import chart_1 from "./chart_1.png";
import chart_2 from "./chart_2.png";
import vars from "../App/sass/vars.sass";
import { INCOMES, COSTS } from "../../../common/constants";

class Charts extends React.Component {
  state = {
    chartType: COSTS,
    hidden: screen.width < parseInt(vars.chartsBP, 10)
  };

  showIncomesCharts = () => {
    this.setState({ chartType: INCOMES });
  };

  showCostsCharts = () => {
    this.setState({ chartType: COSTS });
  };

  hideCharts = () => {
    this.setState(state => ({ hidden: !state.hidden }));
  };

  render() {
    return (
      <>
        <div className={style.hideButton} onClick={this.hideCharts}>
          <img src={this.state.hidden ? chart_2 : chart_1} alt="Иконка графика" />
        </div>
        <div className={`${style.container} ${this.state.hidden && style.hidden}`}>
          <div className={style.chartsHeader}>
            <div
              className={`
              ${style.chartType} 
              ${this.state.chartType === COSTS && style.active}
            `}
              onClick={this.showCostsCharts}
            >
              Расходы
            </div>
            <div
              className={`
              ${style.chartType} 
              ${this.state.chartType === INCOMES && style.active}
            `}
              onClick={this.showIncomesCharts}
            >
              Доходы
            </div>
          </div>
          <div className={style.charts}>
            <Slider type={this.state.chartType} />
          </div>
        </div>
      </>
    );
  }
}

export default Charts;
