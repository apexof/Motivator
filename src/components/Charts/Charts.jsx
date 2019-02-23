import React from "react";
import Chart from "./Chart";
import style from "./Charts.sass";
import { INCOMES, COSTS } from "../../../constants";

class ChartsFilter extends React.Component {
  state = { chartType: COSTS };

  showIncomesCharts = () => {
    this.setState({ chartType: INCOMES });
  };

  showCostsCharts = () => {
    this.setState({ chartType: COSTS });
  };

  render() {
    return (
      <div className={style.constainer}>
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
          <Chart type={this.state.chartType} />
        </div>
      </div>
    );
  }
}

export default ChartsFilter;
