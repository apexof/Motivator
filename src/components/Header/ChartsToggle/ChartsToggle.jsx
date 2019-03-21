import React from "react";
import style from "./ChartsToggle.sass";
import chart_1 from "./chart_1.png";
import chart_2 from "./chart_2.png";

function ChartsToggle({ toggleCharts, hiddenCharts }) {
  return (
    <div onClick={toggleCharts}>
      <img
        src={hiddenCharts ? chart_2 : chart_1}
        className={style.hideButton}
        alt="Иконка графика"
      />
    </div>
  );
}

export default ChartsToggle;
