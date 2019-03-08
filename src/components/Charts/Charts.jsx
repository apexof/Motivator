import React from "react";
import Slider from "./Slider";
import style from "./Charts.sass";
import { INCOMES, COSTS } from "../../../common/constants";

class Charts extends React.Component {
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
          <Slider type={this.state.chartType} />
        </div>
      </div>
    );
  }
}

export default Charts;
